// import React from "react";
import SwiperPopularMovies from "./SwiperPopularMovies/SwiperPopularMovies";
import { Container, Box, AreaTitle } from "./PopularMoviesStyle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const PopularMovies = () => {
  return (
    <Container>
      <Box>
        <AreaTitle>
          <h1>Filmes Populares</h1>
          <button>
            Ver todos
            <KeyboardDoubleArrowRightIcon fontSize="small" />
          </button>
        </AreaTitle>
        <SwiperPopularMovies />
      </Box>
    </Container>
  );
};

export default PopularMovies;
