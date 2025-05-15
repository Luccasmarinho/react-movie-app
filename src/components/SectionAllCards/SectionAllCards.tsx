import { useContext, useEffect } from "react";
import { api } from "../../service/api";
import {
  MoviePopular as AllMoviesResults,
  MoviesResponse,
  SectionCardsProps,
} from "../../types/movies/movies";
import { CommonContext } from "../../context/Common/CommonContext";
import { useSearchParams } from "react-router-dom";
import ContainerCards from "../ContainerCards/ContainerCards";
import Loading from "../Home/Loading/Loading";

const SectionAllCards = ({
  title,
  setMovie,
  movieList,
  paramsMovie,
}: SectionCardsProps) => {
  const { setLoading, loading } = useContext(CommonContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    setLoading(true);
    async function getAllMovies(): Promise<void> {
      try {
        const connection = await api.get<MoviesResponse<AllMoviesResults[]>>(
          `/discover/${paramsMovie}?page=${page}`
        );
        setMovie(connection.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getAllMovies();
  }, [page]);

  function handleChange(_: React.ChangeEvent<unknown>, newValue: number) {
    setSearchParams({ page: newValue.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ContainerCards
          title={title}
          movieList={movieList}
          Onchange={handleChange}
          page={Number(page)}
        />
      )}
    </>
  );
};

export default SectionAllCards;
