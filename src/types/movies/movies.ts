import { ReactNode } from "react";

export interface Movie {
    id: number;
    title?: string;
    name?: string;
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
    total_pages?: number;
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

export interface MovieAgeGroupsProps extends MovieTopRated {
    age: string | undefined;
    date_release: string;
}

export interface ContainerCardsProps {
    title: string;
    movieList: MoviePopular[];
    Onchange: (event: React.ChangeEvent<unknown>, newValue: number) => void
    page: number;
    total_pages?: number;
}

export interface ReleaseDates {
    certification: string;
  }
  
  export interface MovieRelaseDates {
    iso_3166_1: string;
    release_dates: ReleaseDates[];
    rating: string;
  }
  
  export interface MoviesDetails {
    overview: string;
    release_date: string;
    genres: GenresMovies[];
    first_air_date: string;
  }
  
  export interface GenresMovies {
    name: string;
  }
  
  export interface CreditsMovie {
    cast: CreditsMovieName[];
    crew: CreditsMovieName[];
  }
  
  export interface CreditsMovieName {
    name: string;
  }
  
  export interface MediaType {
    id: number;
    media_type: string;
}

export interface similarTitleProps {
    id: string | undefined;
    mediaType: string | undefined;
}

export interface MoviesDetailsSimilar {
    release_date: string;
    first_air_date: string;
}