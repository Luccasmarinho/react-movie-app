// import React from "react";
import CardsMovieSwiper from "./CardsMoviesSwiper/CardsMoviesSwiper";
import { Container, Box, AreaTitle } from "./SectionCardsMoviesStyle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { SectionCardsProps } from "../../types/movies/movies"

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
