import { ReactNode, useState } from "react";
import AppContext from "./AppContext";

interface MovieTopRated {
  id: number;
  backdrop_path: string;
  overview: string;
  title: string;
}

interface MoviePopular {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

interface PropsChildren {
  children: ReactNode
}

function AppProvider({ children }: PropsChildren) {
  const [movieTopRated, setMovieTopRated] = useState<MovieTopRated[]>([]);
  const [moviePopular, setMoviePopular] = useState<MoviePopular[]>([]);
  const [navSelect, setNavSelect] = useState<string>("home");
  const [loading, setLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

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
    setMoviePopular
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
