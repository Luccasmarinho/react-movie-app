// import React from 'react'
import { useContext } from "react";
import Landing from "../Landing/Landing";
import SectionCardsMovies from "../SectionCardsMovies/SectionCardsMovies";
import AppContext from "../../context/AppContext";
import MovieVideo from "../MovieVideo/MovieVideo";
import SectionCardsSeries from "../SectionCardsSeries/SectionCardsSeries";
import BackToTopButton from "../BackToTopButton/BackTopTopButton";

const MainContent = () => {
  const {
    moviePopular,
    movieUpComing,
    setMoviePopular,
    setMovieUpComing,
    seriesPopular,
    setSeriesPopular,
    seriesTopRated,
    setSeriesTopRated,
  } = useContext(AppContext);
  return (
    <main>
      <Landing />
      <SectionCardsMovies
        title="Filmes Populares"
        movieList={moviePopular}
        setMovie={setMoviePopular}
        paramsMovie="/popular"
      />
      <SectionCardsMovies
        title="Filmes Lançamentos"
        movieList={movieUpComing}
        setMovie={setMovieUpComing}
        paramsMovie="/upcoming"
      />
      <MovieVideo />
      <SectionCardsSeries
        title="Séries populares"
        serieList={seriesPopular}
        setSerie={setSeriesPopular}
        paramsSerie="/popular"
      />
      <SectionCardsSeries
        title="Séries mais bem avaliadas"
        serieList={seriesTopRated}
        setSerie={setSeriesTopRated}
        paramsSerie="/top_rated"
      />
      <BackToTopButton />
    </main>
  );
};

export default MainContent;
