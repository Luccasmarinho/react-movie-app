// import React from 'react'
import { useContext } from "react";
import Landing from "../Landing/Landing";
import SectionCards from "../SectionCards/SectionCards";
import AppContext from "../../context/AppContext";

const MainContent = () => {
  const { moviePopular, movieUpComing, setMoviePopular, setMovieUpComing } =
    useContext(AppContext);
  return (
    <main>
      <Landing />
      <SectionCards
        title="Filmes Populares"
        movieList={moviePopular}
        setMovie={setMoviePopular}
        paramsMovie="/popular"
      />
      <SectionCards
        title="Filmes Lançamentos"
        movieList={movieUpComing}
        setMovie={setMovieUpComing}
        paramsMovie="/upcoming"
      />
    </main>
  );
};

export default MainContent;
