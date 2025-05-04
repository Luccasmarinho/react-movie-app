import { createContext } from "react";
import { MovieContextType } from "../../types/movies/movies";

export const MovieContext = createContext<MovieContextType>({} as MovieContextType);
