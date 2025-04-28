import { ReactNode, useState } from "react";
import AppContext from "./AppContext";

interface Movie {
  id: number;
  backdrop_path: string;
  overview: string;
  title: string;
}

interface PropsChildren {
  children: ReactNode
}

function AppProvider({ children }: PropsChildren) {
  const [movieUpComing, setMovieUpComing] = useState<Movie[]>([]);
  const [navSelect, setNavSelect] = useState<string>("home");
  const [loading, setLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const values = {
    movieUpComing,
    setMovieUpComing,
    navSelect,
    setNavSelect,
    loading,
    setLoading,
    isClicked,
    setIsClicked
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
