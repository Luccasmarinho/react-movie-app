// import React from "react";
import CardsMovieSwiper from "./CardsMoviesSwiper/CardsMoviesSwiper";
import { Container, Box, AreaTitle } from "./SectionCardsMoviesStyle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { SectionCardsProps } from "../../../types/movies/movies"
import { Link } from "react-router-dom";
import {handleSession} from "../../../utils/utils"
import { useContext } from "react";
import { CommonContext } from "../../../context/Common/CommonContext";

const SectionCardsMovies = ({
  title,
  movieList,
  paramsMovie,
  setMovie,
}: SectionCardsProps) => {
  const { setNavSelect } = useContext(CommonContext);
  return (
    <Container>
      <Box>
        <AreaTitle>
          <h1>{title}</h1>
          <Link to={"/filmes"}>
            <button onClick={() => handleSession("filmes", setNavSelect)}>
              Ver todos
              <KeyboardDoubleArrowRightIcon fontSize="small" />
            </button>
          </Link>
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
