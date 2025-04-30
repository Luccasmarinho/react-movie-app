// import React from "react";
import SectionCardsSwiper from "./SectionCardsSwiper/SectionCardsSwiper";
import { Container, Box, AreaTitle } from "./SectionCardsStyle";
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

const SectionCards = ({
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
        <SectionCardsSwiper
          setMovie={setMovie}
          movieList={movieList}
          paramsMovie={paramsMovie}
        />
      </Box>
    </Container>
  );
};

export default SectionCards;
