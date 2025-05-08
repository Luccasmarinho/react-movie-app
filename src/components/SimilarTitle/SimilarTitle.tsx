import { MoviePopular, MoviesResponse } from "../../types/movies/movies";
import { useEffect, useState } from "react";
import { api } from "../../service/api";

interface similarTitleProps {
  id: string | undefined;
}
const SimilarTitle = ({ id }: similarTitleProps) => {
  const [similarTitle, SetSimilarTitle] = useState<MoviePopular[]>([]);
  useEffect(() => {
    // setLoading(true);
    async function getSimilar(): Promise<void> {
      try {
        const connection = await api.get<MoviesResponse<MoviePopular[]>>(
          `/movie/${id}/similar`,
          {
            params: {
              language: "en-US",
            },
          }
        );
        SetSimilarTitle(connection.data.results);
        // setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getSimilar();
  }, []);

  return (
    <div>
      {similarTitle.map((element) => (
        <img
          style={{ width: "280px" }}
          src={`https://image.tmdb.org/t/p/original${element.poster_path}`}
        ></img>
      ))}
    </div>
  );
};

export default SimilarTitle;
