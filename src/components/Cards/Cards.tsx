import HalfRating from "../HalfRating/HalfRating";
import { AreaCard, AreaTitleRating } from "./CardsStyle";
import { CardsProps } from "../../types/common/common";
import { MoviesResponse, MovieTrailer } from "../../types/movies/movies";
import { api } from "../../service/api";
import { useState } from "react";

const Cards = ({ id, poster_path, title, name, vote_average }: CardsProps) => {
  const [_, setKeyTrailer] = useState<string | undefined>();

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
    <AreaCard key={id}>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`Poster ${title || name}`}
        />
        <AreaTitleRating>
          <p>{title || name}</p>
          <HalfRating vote={vote_average} />
        </AreaTitleRating>
      </section>
    </AreaCard>
  );
};

export default Cards;
