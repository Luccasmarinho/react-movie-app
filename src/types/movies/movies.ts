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



//   export interface AppContextType {
//     movieTopRated: MovieTopRated[];
//     setMovieTopRated: React.Dispatch<React.SetStateAction<MovieTopRated[]>>;
//     navSelect: string;
//     setNavSelect: React.Dispatch<React.SetStateAction<string>>;
//     loading: boolean;
//     setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//     isClicked: boolean;
//     setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
//     moviePopular: MoviePopular[];
//     setMoviePopular: React.Dispatch<React.SetStateAction<MoviePopular[]>>;
//     movieUpComing: MoviePopular[];
//     setMovieUpComing: React.Dispatch<React.SetStateAction<MoviePopular[]>>;
//     seriesPopular: Series[];
//     setSeriesPopular: React.Dispatch<React.SetStateAction<Series[]>>;
//     seriesTopRated: Series[];
//     setSeriesTopRated:React.Dispatch<React.SetStateAction<Series[]>>;
//     scrollMove: boolean;
//     setScrollMove: React.Dispatch<React.SetStateAction<boolean>>;
//   }