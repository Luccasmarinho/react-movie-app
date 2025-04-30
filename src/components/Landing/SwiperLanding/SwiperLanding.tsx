import { SwiperSlide } from "swiper/react";
import "swiper/css"; // Importando o estilo base
import "swiper/css/navigation"; // Se quiser navegação (setinhas)
import { Navigation, Autoplay } from "swiper/modules"; // Importar o módulo de navegação (se quiser setas)
import { StyledSwiper, Container, AreaButton } from "./SwiperLandingStyle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { useContext, useEffect } from "react";
import { api } from "../../../service/api";
import AppContext from "../../../context/AppContext";
import Loading from "../../Loading/Loading";

const SwiperCarousel = () => {
  const { movieTopRated, setMovieTopRated, loading, setLoading } =
    useContext(AppContext);

  interface MovieTopRated {
    id: number;
    backdrop_path: string;
    overview: string;
    title: string;
  }

  interface MoviesResponse {
    results: MovieTopRated[];
  }

  useEffect(() => {
    setLoading(true);
    async function getMoviesTopRated() {
      try {
        const response = await api.get<MoviesResponse>("/movie/top_rated");
        setMovieTopRated(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getMoviesTopRated();
  }, []);

  return (
    <StyledSwiper
      modules={[Navigation, Autoplay]} // Se quiser usar setas ou outros módulos
      navigation // Habilita as setinhas
      spaceBetween={0} // Espaço entre slides
      slidesPerView={1} // Quantos slides aparecem de uma vez
      autoplay={{ delay: 5000 }}
      loop={false}
    >
      {loading ? (
        <Loading />
      ) : (
        movieTopRated.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Container>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <AreaButton>
                <button>
                  <PlayArrowIcon />
                  Assistir
                </button>
                <button>
                  <InfoOutlineIcon />
                  Mais informações
                </button>
              </AreaButton>
            </Container>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Poster filme"
            />
          </SwiperSlide>
        ))
      )}
    </StyledSwiper>
  );
};

export default SwiperCarousel;
