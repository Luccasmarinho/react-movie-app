import { ReactNode } from "react";

export interface Series {
  id: number;
  name: string;
  vote_average: number;
  poster_path: string;
}

export interface SeriesResponse {
  results: Series[];
}

export interface CardsSeriesProps {
    title?: string;
    setSerie : React.Dispatch<React.SetStateAction<Series[]>>;
    serieList: Series[];
    paramsSerie: string;
}

export interface PropsChildren {
    children: ReactNode;
}

export interface SeriesContextType {
  seriesPopular: Series[];
  setSeriesPopular: React.Dispatch<React.SetStateAction<Series[]>>;
  seriesTopRated: Series[];
  setSeriesTopRated:React.Dispatch<React.SetStateAction<Series[]>>;
}