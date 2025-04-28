import { useState } from "react";
import AppContext from "./AppContext";

interface Movie {
  id: number;
  backdrop_path: string;
  overview: string;
  title: string;
}

function AppProvider({ children }: any) {
  const [movieUpComing, setMovieUpComing] = useState<Movie[]>([]);
  const [navSelect, setNavSelect] = useState<string>("home");
  const [loading, setLoading] = useState<boolean>(false);

  const values = {
    movieUpComing,
    setMovieUpComing,
    navSelect,
    setNavSelect,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
