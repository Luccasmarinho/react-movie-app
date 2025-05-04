import { SwiperSlide } from "swiper/react";
import "swiper/css"; // Importando o estilo base
import "swiper/css/navigation"; // Se quiser navegação (setinhas)
import { Navigation, Autoplay } from "swiper/modules"; // Importar o módulo de navegação (se quiser setas)
import { useContext, useEffect } from "react";
import { api } from "../../../service/api";
import Loading from "../../Loading/Loading";
import { SwiperStyled } from "./CardsMoviesSwiperStyle";
import {
  MoviePopular,
  MoviesResponse,
  MoviesProps,
} from "../../../types/movies/movies";
import { CommonContext } from "../../../context/Common/CommonContext";
import Cards from "../../Cards/Cards";

const CardsMovieSwiper = ({
  setMovie,
  movieList,
  paramsMovie,
}: MoviesProps) => {
  const { loading, setLoading } = useContext(CommonContext);

  useEffect(() => {
    setLoading(true);
    async function getMovies(): Promise<void> {
      try {
        const connection = await api.get<MoviesResponse<MoviePopular[]>>(
          `/movie/${paramsMovie}`
        );
        setMovie(connection.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getMovies();
  }, []);

  return (
    <SwiperStyled
      modules={[Navigation, Autoplay]} // Se quiser usar setas ou outros módulos
      slidesPerGroup={4}
      slidesPerView={4} // Quantos slides aparecem de uma vez
      navigation // Habilita as setinhas
      spaceBetween={0} // Espaço entre slides
      autoplay={{ delay: 5000 }}
      loop={false}
      // breakpoints={{
      //   300: {
      //     slidesPerView: 1,
      //   },
      // }}
    >
      {loading ? (
        <Loading />
      ) : (
        movieList.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Cards
              key={movie.id}
              id={movie.id}
              poster_path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              vote_average={movie.vote_average / 2}
              title={movie.title}
            />
          </SwiperSlide>
        ))
      )}
    </SwiperStyled>
  );
};

export default CardsMovieSwiper;
