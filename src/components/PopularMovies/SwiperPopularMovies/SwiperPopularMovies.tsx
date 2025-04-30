// import React from 'react'
import { SwiperSlide } from "swiper/react";
import "swiper/css"; // Importando o estilo base
import "swiper/css/navigation"; // Se quiser navegação (setinhas)
import { Navigation, Autoplay } from "swiper/modules"; // Importar o módulo de navegação (se quiser setas)
import { useContext, useEffect } from "react";
import { api } from "../../../service/api";
import AppContext from "../../../context/AppContext";
import Loading from "../../Loading/Loading";
import {
  SwiperStyled,
  AreaCard,
  AreaTitleRating,
} from "./SwiperPopularMoviesStyle";
import HalfRating from "../../HalfRating/HalfRating";

interface MoviePopular {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

interface MovieResponse {
  results: MoviePopular[];
}

const SwiperPopularMovies = () => {
  const { moviePopular, setMoviePopular, loading, setLoading } =
    useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    async function getMoviesPopular(): Promise<void> {
      try {
        const connection = await api.get<MovieResponse>("/movie/popular");
        setMoviePopular(connection.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getMoviesPopular();
  }, []);

  return (
    <SwiperStyled
      modules={[Navigation, Autoplay]} // Se quiser usar setas ou outros módulos
      slidesPerGroup={4}
      slidesPerView={4} // Quantos slides aparecem de uma vez
      navigation // Habilita as setinhas
      spaceBetween={0} // Espaço entre slides
      autoplay={{ delay: 50022220 }}
      loop={false}
    >
      {loading ? (
        <Loading />
      ) : (
        moviePopular.map((movie) => (
          <SwiperSlide key={movie.id}>
            <AreaCard>
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

export default SwiperPopularMovies;
