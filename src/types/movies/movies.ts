import { ReactNode } from "react";

export interface Movie {
    id: number;
    title: string;
}

export interface MovieTopRated extends Movie {
    backdrop_path: string;
    overview: string;
}

export interface MoviePopular extends Movie {
    vote_average: number;
    poster_path: string;
}

export interface MoviePlayingNowId {
    id: number;
}

export interface MovieTrailer {
    key: string;
}

export interface MoviesResponse<T> {
    results: T
}

export interface MoviesProps {
    movieList: MoviePopular[];
    paramsMovie: string;
    setMovie: React.Dispatch<React.SetStateAction<MoviePopular[]>>;
}

export interface SectionCardsProps extends MoviesProps{
    title: string;
}

export interface PropsChildren {
    children: ReactNode;
}

export interface MovieContextType {
    movieTopRated: MovieTopRated[];
    setMovieTopRated: React.Dispatch<React.SetStateAction<MovieTopRated[]>>;
    moviePopular: MoviePopular[];
    setMoviePopular: React.Dispatch<React.SetStateAction<MoviePopular[]>>;
    movieUpComing: MoviePopular[];
    setMovieUpComing: React.Dispatch<React.SetStateAction<MoviePopular[]>>; 
    AllMovies: MoviePopular[];
    setAllMovies: React.Dispatch<React.SetStateAction<MoviePopular[]>>; 
}