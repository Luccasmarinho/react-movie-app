import { createContext } from "react";

interface AppContextType {
  movieUpComing: Movie[];
  setMovieUpComing: React.Dispatch<React.SetStateAction<Movie[]>>;
  navSelect: string;
  setNavSelect: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Movie {
  id: number;
  backdrop_path: string;
  overview: string;
  title: string;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export default AppContext;
