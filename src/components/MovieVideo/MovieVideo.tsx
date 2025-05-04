import { useContext, useEffect, useState } from "react";
import { api } from "../../service/api";
import AppContext from "../../context/AppContext";
import Loading from "../Loading/Loading";
import {
  MoviesResponse,
  MoviePlayingNowId,
  MovieVideos,
} from "../../types/movies/movies";

const MovieVideo = () => {
  const [idMovieNowPlaying, setIdMovieNowPLaying] = useState<number>();
  const [movieKey, setMovieKey] = useState<string>();
  const { loading, setLoading } = useContext(AppContext);
  const [indice, setIndice] = useState<number>(0);

  useEffect(() => {
    async function getIdMovieNowPlaying(): Promise<void> {
      try {
        const connectionNowPlaying = await api.get<
          MoviesResponse<MoviePlayingNowId[]>
        >("/movie/now_playing");
        setIdMovieNowPLaying(connectionNowPlaying.data.results[0].id);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getIdMovieNowPlaying();
  }, []);

  useEffect(() => {
    setLoading(true);
    async function getKeyVideo(): Promise<void> {
      if (!idMovieNowPlaying) return;
      try {
        const connection = await api.get<MoviesResponse<MovieVideos[]>>(
          `/movie/${idMovieNowPlaying}/videos`
        );

        while (connection.data.results.length == 0) {
          setIndice((prev) => prev + 1);
          const connectionNowPlaying = await api.get<
            MoviesResponse<MoviePlayingNowId[]>
          >("/movie/now_playing");
          setIdMovieNowPLaying(connectionNowPlaying.data.results[indice].id);
          return;
        }

        setMovieKey(connection.data.results[0]?.key);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getKeyVideo();
  }, [idMovieNowPlaying, indice]);

  return (
    <section style={{ position: "relative" }}>
      {loading && <Loading />}
      <iframe
        width="100%"
        height="400px"
        src={`https://www.youtube.com/embed/${movieKey}?autoplay=1&mute=1&loop=1&playlist=${movieKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ border: "0" }}
      ></iframe>
    </section>
  );
};

export default MovieVideo;
