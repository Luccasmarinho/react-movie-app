import { useContext, useEffect } from "react";
// import Cards from "../Cards/Cards";
// import BasicPagination from "../BasicPagination/BasicPagination";
// import {
//   Container,
//   AreaTitle,
//   Box,
//   AreaCard,
//   AreaPagination,
// } from "./SectionAllCardsStyle";
import { api } from "../../service/api";
import {
  MoviePopular as AllMoviesResults,
  MoviesResponse,
  SectionCardsProps,
} from "../../types/movies/movies";
import { CommonContext } from "../../context/Common/CommonContext";
import { useSearchParams } from "react-router-dom";
import ContainerCards from "../ContainerCards/ContainerCards";

const SectionAllCards = ({
  title,
  setMovie,
  movieList,
  paramsMovie,
}: SectionCardsProps) => {
  const { setLoading } = useContext(CommonContext);
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
      <ContainerCards
        title={title}
        movieList={movieList}
        Onchange={handleChange}
        page={Number(page)}
      />
    </>
    // <Container>
    //   <AreaTitle>
    //     <h1>{title}</h1>
    //   </AreaTitle>
    //   <Box>
    //     <AreaCard>
    //       {movieList.map((movie) => (
    //         <Cards
    //           key={movie.id}
    //           id={movie.id}
    //           poster_path={movie.poster_path}
    //           vote_average={movie.vote_average / 2}
    //           title={movie.title}
    //           name={movie.name}
    //         />
    //       ))}
    //     </AreaCard>
    //   </Box>
    //   <AreaPagination>
    //     <BasicPagination OnChange={handleChange} page={Number(page)} />
    //   </AreaPagination>
    // </Container>
  );
};

export default SectionAllCards;
