import {
  MoviesResponse,
  MovieTopRated as SimilarTitleType,
} from "../../types/movies/movies";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import CardSimilarTitle from "../CardSimilarTitle/CardSimilarTitle";
import { Container } from "./SimilarTitleStyle.tsx";

interface similarTitleProps {
  id: string | undefined;
}

const SimilarTitle = ({ id }: similarTitleProps) => {
  const [similarTitle, SetSimilarTitle] = useState<SimilarTitleType[]>([]);
  useEffect(() => {
    // setLoading(true);
    async function getSimilar(): Promise<void> {
      try {
        const connection = await api.get<MoviesResponse<SimilarTitleType[]>>(
          `/movie/${id}/similar`
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
    <Container>
      {similarTitle.slice(0, 9).map((element) => (
        <CardSimilarTitle
          key={element.id}
          id={element.id}
          backdrop_path={element.backdrop_path}
          overview={element.overview}
          title={element.title}
        />
      ))}
    </Container>
  );
};

export default SimilarTitle;
