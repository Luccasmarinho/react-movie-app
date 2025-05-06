import { useState } from "react";
import { MovieContext } from "./MovieContext";
import {
  MovieTopRated,
  MoviePopular,
  PropsChildren,
} from "../../types/movies/movies";

const ProviderMovie = ({ children }: PropsChildren) => {
  const [movieTopRated, setMovieTopRated] = useState<MovieTopRated[]>([]);
  const [moviePopular, setMoviePopular] = useState<MoviePopular[]>([]);
  const [movieUpComing, setMovieUpComing] = useState<MoviePopular[]>([]);
  const [AllMovies, setAllMovies] = useState<MoviePopular[]>([]);

  const values = {
    movieTopRated,
    setMovieTopRated,
    moviePopular,
    setMoviePopular,
    movieUpComing,
    setMovieUpComing,
    AllMovies,
    setAllMovies,
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default ProviderMovie;
