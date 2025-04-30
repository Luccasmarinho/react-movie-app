import { createContext } from "react";

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

interface AppContextType {
  movieTopRated: MovieTopRated[];
  setMovieTopRated: React.Dispatch<React.SetStateAction<MovieTopRated[]>>;
  navSelect: string;
  setNavSelect: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
  moviePopular: MoviePopular[];
  setMoviePopular: React.Dispatch<React.SetStateAction<MoviePopular[]>>
  movieUpComing: MoviePopular[];
  setMovieUpComing: React.Dispatch<React.SetStateAction<MoviePopular[]>>

}



const AppContext = createContext<AppContextType>({} as AppContextType);

export default AppContext;
