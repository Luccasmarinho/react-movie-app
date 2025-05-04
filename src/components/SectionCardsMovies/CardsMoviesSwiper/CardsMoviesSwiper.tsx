// import React from 'react'
import { SwiperSlide } from "swiper/react";
import "swiper/css"; // Importando o estilo base
import "swiper/css/navigation"; // Se quiser navegação (setinhas)
import { Navigation, Autoplay } from "swiper/modules"; // Importar o módulo de navegação (se quiser setas)
import { useContext, useEffect, useState } from "react";
import { api } from "../../../service/api";
import Loading from "../../Loading/Loading";
import {
  SwiperStyled,
  AreaCard,
  AreaTitleRating,
} from "./CardsMoviesSwiperStyle";
import HalfRating from "../../HalfRating/HalfRating";
import { MoviePopular, MoviesResponse, MovieTrailer, MoviesProps } from "../../../types/movies/movies"
import { CommonContext } from "../../../context/Common/CommonContext";

const CardsMovieSwiper = ({
  setMovie,
  movieList,
  paramsMovie,
}: MoviesProps) => {
  const { loading, setLoading } = useContext(CommonContext);
  const [_, setKeyTrailer] = useState<string | undefined>();

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

  async function getMovieTrailerKey(movieId: number): Promise<void> {
    try {
      const connection = await api.get<MoviesResponse<MovieTrailer[]>>(
        `/movie/${movieId}/videos`
      );
      setKeyTrailer(connection.data.results[0].key);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

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
            <AreaCard onClick={() => getMovieTrailerKey(movie.id)}>
              <section>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="Poster filme"
                />
                <AreaTitleRating>
                  <p>{movie.title}</p>
                  <HalfRating vote={movie.vote_average / 2} />
                </AreaTitleRating>
              </section>
            </AreaCard>
          </SwiperSlide>
        ))
      )}
    </SwiperStyled>
  );
};

export default CardsMovieSwiper;
