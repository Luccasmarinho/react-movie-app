// import React from "react";
import CardsMovieSwiper from "./CardsMoviesSwiper/CardsMoviesSwiper";
import { Container, Box, AreaTitle } from "./SectionCardsMoviesStyle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface MoviePopular {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

interface SectionCardsProps {
  title: string;
  movieList: MoviePopular[];
  paramsMovie: string;
  setMovie: React.Dispatch<React.SetStateAction<MoviePopular[]>>;
}

const SectionCardsMovies = ({
  title,
  movieList,
  paramsMovie,
  setMovie,
}: SectionCardsProps) => {
  return (
    <Container>
      <Box>
        <AreaTitle>
          <h1>{title}</h1>
          <button>
            Ver todos
            <KeyboardDoubleArrowRightIcon fontSize="small" />
          </button>
        </AreaTitle>
        <CardsMovieSwiper
          setMovie={setMovie}
          movieList={movieList}
          paramsMovie={paramsMovie}
        />
      </Box>
    </Container>
  );
};

export default SectionCardsMovies;
