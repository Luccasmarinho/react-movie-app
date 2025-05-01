// import React from 'react'
import { useContext } from "react";
import Landing from "../Landing/Landing";
import SectionCards from "../SectionCards/SectionCards";
import AppContext from "../../context/AppContext";
import MovieVideo from "../MovieVideo/MovieVideo"

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
      <MovieVideo />
    </main>
  );
};

export default MainContent;
