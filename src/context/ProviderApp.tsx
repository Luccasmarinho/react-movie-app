import { useState } from "react";
import AppContext from "./AppContext";
import { Series, PropsChildren } from "../types/series/series";
import { MovieTopRated, MoviePopular } from "../types/movies/movies";

function AppProvider({ children }: PropsChildren) {
  const [movieTopRated, setMovieTopRated] = useState<MovieTopRated[]>([]);
  const [moviePopular, setMoviePopular] = useState<MoviePopular[]>([]);
  const [movieUpComing, setMovieUpComing] = useState<MoviePopular[]>([]);

  const [seriesPopular, setSeriesPopular] = useState<Series[]>([]);
  const [seriesTopRated, setSeriesTopRated] = useState<Series[]>([]);
  
  const [navSelect, setNavSelect] = useState<string>("home");
  const [loading, setLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scrollMove, setScrollMove] = useState<boolean>(false);

  const values = {
    movieTopRated,
    setMovieTopRated,
    navSelect,
    setNavSelect,
    loading,
    setLoading,
    isClicked,
    setIsClicked,
    moviePopular,
    setMoviePopular,
    movieUpComing,
    setMovieUpComing,
    seriesPopular,
    setSeriesPopular,
    seriesTopRated,
    setSeriesTopRated,
    scrollMove,
    setScrollMove
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
