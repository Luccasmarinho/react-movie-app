import HalfRating from "../Home/HalfRating/HalfRating";
import { AreaCard, AreaTitleRating } from "./CardsStyle";
import { CardsProps } from "../../types/common/common";
import SkeletonCards from "../SkeletonCards/SkeletonCards";
import { useContext } from "react";
import { CommonContext } from "../../context/Common/CommonContext";
// import { MoviesResponse, MovieTrailer } from "../../types/movies/movies";
// import { api } from "../../service/api";
// import { useState } from "react";
import noImage from "../../assets/No_Image_Available.jpg";

const Cards = ({ id, poster_path, title, name, vote_average }: CardsProps) => {
  const { loading } = useContext(CommonContext);

  // const [_, setKeyTrailer] = useState<string | undefined>();

  // async function getMovieTrailerKey(movieId: number): Promise<void> {
  //   try {
  //     const connection = await api.get<MoviesResponse<MovieTrailer[]>>(
  //       `/movie/${movieId}/videos`
  //     );
  //     setKeyTrailer(connection.data.results[0].key);
  //   } catch (error) {
  //     console.error("Erro ao buscar dados:", error);
  //   }
  // }

  return (
    <AreaCard key={id}>
      {loading ? (
        <SkeletonCards />
      ) : (
        <section>
          <img
            src={
              !poster_path
                ? noImage
                : `https://image.tmdb.org/t/p/original${poster_path}`
            }
            alt={`Poster ${title || name}`}
          />
          <AreaTitleRating>
            <p>{title || name}</p>
            <HalfRating vote={vote_average} />
          </AreaTitleRating>
        </section>
      )}
    </AreaCard>
  );
};

export default Cards;
