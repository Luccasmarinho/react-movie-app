import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ContainerOverview,
  Box,
  Age,
  Overview,
  AreaTitle,
} from "./ModalDetailsStyle";
import CloseIcon from "@mui/icons-material/Close";
import VideoTrailer from "../VideoTrailer/VideoTrailer";
import { CommonContext } from "../../context/Common/CommonContext";
import { api } from "../../service/api";
import {
  MovieTrailer,
  MoviesResponse,
  MovieRelaseDates,
  MoviesDetails,
  CreditsMovie,
  MediaType,
} from "../../types/movies/movies";
import AgeGroup from "../AgeGroup/AgeGroup";
import SimilarTitle from "../SimilarTitle/SimilarTitle";
import Loading from "../Home/Loading/Loading";
import AddToFavButton from "../AddToFavButton/AddToFavButton";

const ModalDetails = () => {
  const navigate = useNavigate();
  const { id, title } = useParams();

  const [keyTrailer, setKeyTrailer] = useState<string>("");
  const { loading, setLoading, path } = useContext(CommonContext);
  const [ageGroup, setAgeGroup] = useState<string | undefined>("");
  const [overviews, setOverViews] = useState<string>("");
  const [dateRelease, setDateRelease] = useState<string>("");
  const [cast, setCast] = useState<string[]>([]);
  const [crew, setCrew] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [mediaType, setMediaType] = useState<string | undefined>("");
  const [posterPath, setPosterPath] = useState<string>("");
  const [voteAverage, setVoteAverage] = useState<number>();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getMediaType() {
      try {
        const connection = await api.get<MoviesResponse<MediaType[]>>(
          `/search/multi?query=${title}`
        );
        const findMediaType = await connection.data.results.find(
          (e) => e.id == Number(id)
        );
        setMediaType(findMediaType?.media_type);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getMediaType();
  }, [id]);

  useEffect(() => {
    setLoading(true);
    if (!mediaType) return;
    async function getKeyVideo(): Promise<void> {
      try {
        const connection = await api.get<MoviesResponse<MovieTrailer[]>>(
          `/${mediaType}/${id}/videos`,
          {
            params: {
              language: "en-US",
            },
          }
        );

        setKeyTrailer(connection.data.results[0]?.key);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getKeyVideo();
  }, [id, mediaType]);

  useEffect(() => {
    if (!mediaType) return;
    async function getReleaseDate(): Promise<void> {
      try {
        const connection = await api.get<MoviesResponse<MovieRelaseDates[]>>(
          `/${mediaType}/${id}/${
            mediaType == "movie" ? "release_dates" : "content_ratings"
          }`
        );
        const findAge = connection.data.results.find(
          (e) => e.iso_3166_1 == "BR"
        );

        if (mediaType == "movie") {
          setAgeGroup(
            findAge?.release_dates[0]?.certification ||
              findAge?.release_dates[1]?.certification
          );
        } else {
          setAgeGroup(findAge?.rating);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getReleaseDate();
  }, [id, mediaType]);

  useEffect(() => {
    setLoading(true);
    if (!mediaType) return;
    async function getMovieDetails(): Promise<void> {
      try {
        const connection = await api.get<MoviesDetails>(`/${mediaType}/${id}`);
        setPosterPath(connection.data.poster_path);
        setVoteAverage(connection.data.vote_average);
        const genresArray = connection.data.genres.map((g) => g.name);
        setGenres(genresArray);
        setOverViews(connection.data.overview);
        if (mediaType == "movie") {
          setDateRelease(connection.data.release_date);
        } else {
          setDateRelease(connection.data.first_air_date);
        }

        setTimeout(() => {
          modalRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getMovieDetails();

    return () => {
      setGenres([]);
    };
  }, [id, mediaType]);

  useEffect(() => {
    setLoading(true);

    if (!mediaType) return;

    async function getCredits(): Promise<void> {
      try {
        const connection = await api.get<CreditsMovie>(
          `/${mediaType}/${id}/credits`
        );

        const castArray = connection.data.cast.map((c) => c.name);
        setCast(castArray);

        const crewArray = connection.data.crew.map((c) => c.name);
        setCrew(crewArray);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getCredits();

    return () => {
      setCast([]);
      setCrew([]);
    };
  }, [id, mediaType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate(path);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <ModalOverlay onClick={() => navigate(path)}>
      <ModalContent ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => navigate(path)}>
          <CloseIcon />
        </CloseButton>
        {!mediaType || loading ? (
          <Loading />
        ) : (
          <>
            <AreaTitle>
              <h2>{title}</h2>
              <AddToFavButton
                id={Number(id)}
                name={title}
                title={title}
                poster_path={posterPath}
                vote_average={(voteAverage ?? 0) / 2}
              />
            </AreaTitle>
            <div>
              <VideoTrailer keyTrailer={keyTrailer} />
            </div>

            <ContainerOverview>
              <Box>
                <Age>
                  <p>{dateRelease.slice(0, 4)}</p>
                  <AgeGroup age={ageGroup} />
                </Age>
                <Overview>
                  <p>{overviews}</p>
                </Overview>
              </Box>

              <Box>
                <div>
                  <p>
                    <strong>Elenco: </strong> {cast.slice(0, 5).join(", ")}.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Direção: </strong> {crew.slice(0, 5).join(", ")}.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Gêneros</strong>: {genres.join(", ")}.
                  </p>
                </div>
              </Box>
            </ContainerOverview>
            <div>
              <h2>Títulos semelhantes</h2>
              <div>
                <SimilarTitle id={id} mediaType={mediaType} />
              </div>
            </div>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalDetails;
