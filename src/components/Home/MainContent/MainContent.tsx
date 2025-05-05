import { useContext } from "react";
import Landing from "../../Home/Landing/Landing";
import SectionCardsMovies from "../../Home/SectionCardsMovies/SectionCardsMovies";
import MovieVideo from "../MovieVideo/MovieVideo";
import SectionCardsSeries from "../../Home/SectionCardsSeries/SectionCardsSeries";
import BackToTopButton from "../BackToTopButton/BackTopTopButton";
import { MovieContext } from "../../../context/Movie/MovieContext";
import { SeriesContext } from "../../../context/Series/SeriesContext";

const MainContent = () => {
  const { moviePopular, movieUpComing, setMoviePopular, setMovieUpComing } =
    useContext(MovieContext);

  const { seriesPopular, setSeriesPopular, seriesTopRated, setSeriesTopRated } =
    useContext(SeriesContext);
  return (
    <main>
      <Landing />
      <SectionCardsMovies
        title="Filmes Populares"
        movieList={moviePopular}
        setMovie={setMoviePopular}
        paramsMovie="/popular"
      />
      <SectionCardsMovies
        title="Filmes Lançamentos"
        movieList={movieUpComing}
        setMovie={setMovieUpComing}
        paramsMovie="/upcoming"
      />
      <MovieVideo />
      <SectionCardsSeries
        title="Séries populares"
        serieList={seriesPopular}
        setSerie={setSeriesPopular}
        paramsSerie="/popular"
      />
      <SectionCardsSeries
        title="Séries mais bem avaliadas"
        serieList={seriesTopRated}
        setSerie={setSeriesTopRated}
        paramsSerie="/top_rated"
      />
      <BackToTopButton />
    </main>
  );
};

export default MainContent;
