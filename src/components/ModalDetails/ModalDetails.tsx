import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ContainerOverview,
  Box,
  Age,
  Overview,
} from "./ModalDetailsStyle";
import CloseIcon from "@mui/icons-material/Close";
import VideoTrailer from "../VideoTrailer/VideoTrailer";
import { CommonContext } from "../../context/Common/CommonContext";
import { api } from "../../service/api";
import { MovieTrailer, MoviesResponse } from "../../types/movies/movies";
import AgeGroup from "../AgeGroup/AgeGroup";
import SimilarTitle from "../SimilarTitle/SimilarTitle";

interface ReleaseDates {
  certification: string;
}

interface MovieRelaseDates {
  iso_3166_1: string;
  release_dates: ReleaseDates[];
}

const ModalDetails = () => {
  const navigate = useNavigate();
  const { id, title } = useParams();

  const [keyTrailer, setKeyTrailer] = useState<string>("");
  const { setLoading } = useContext(CommonContext);
  const [ageGroup, setAgeGroup] = useState<string | undefined>("");

  useEffect(() => {
    setLoading(true);
    async function getKeyVideo(): Promise<void> {
      try {
        const connection = await api.get<MoviesResponse<MovieTrailer[]>>(
          `/movie/${id}/videos`,
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
  }, [id]);

  useEffect(() => {
    async function getReleaseDate(): Promise<void> {
      try {
        const connection = await api.get<MoviesResponse<MovieRelaseDates[]>>(
          `/movie/${id}/release_dates`
        );
        const findAge = connection.data.results.find(
          (e) => e.iso_3166_1 == "BR"
        );
        setAgeGroup(
          findAge?.release_dates[0]?.certification ||
            findAge?.release_dates[1]?.certification
        );
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getReleaseDate();
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <ModalOverlay onClick={() => navigate(-1)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </CloseButton>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <VideoTrailer keyTrailer={keyTrailer} />
        </div>

        <ContainerOverview>
          <Box>
            <Age>
              <p>2021</p>
              <AgeGroup age={ageGroup} />
            </Age>
            <Overview>
              <p>
                Uma viúva e um arqueólogo autodidata fazem uma descoberta
                impressionante neste drama indicado ao BAFTA e considerado "uma
                joia do cinema" pelo The Times of London.
              </p>
            </Overview>
          </Box>

          <Box>
            <div>
              <p>
                <strong>Elenco</strong>: Matt Damon, Leonardo Di Caprio,
                Alexandra Dadario
              </p>
            </div>
            <div>
              <p>
                <strong>Gêneros</strong>:
              </p>
            </div>
            <div>
              <p>
                <strong>Elenco</strong>:
              </p>
            </div>
          </Box>
        </ContainerOverview>
        <div>
          <h2>Títulos semelhantes</h2>
          <div>
            <SimilarTitle id={id} />
          </div>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalDetails;
