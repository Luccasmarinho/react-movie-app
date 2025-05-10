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

interface ReleaseDates {
  certification: string;
}

interface MovieRelaseDates {
  iso_3166_1: string;
  release_dates: ReleaseDates[];
}

interface MoviesDetails {
  release_date: string;
}

const SimilarTitle = ({ id }: similarTitleProps) => {
  const [similarTitle, SetSimilarTitle] = useState<SimilarTitleType[]>([]);
  // const [ageGroup, setAgeGroup] = useState<string | undefined>("");
  const [ageGroups, setAgeGroups] = useState<Record<number, string>>({});
  const [dateRelease, setDateRelease] = useState<Record<number, string>>([]);

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
  }, [id]);

  useEffect(() => {
    async function getCertification(): Promise<void> {
      try {
        const results = await Promise.all(
          similarTitle.map(async (movie) => {
            const connection = await api.get<
              MoviesResponse<MovieRelaseDates[]>
            >(`/movie/${movie.id}/release_dates`);

            const findAge = connection.data.results.find(
              (e) => e.iso_3166_1 === "BR"
            );

            const certification =
              findAge?.release_dates[0]?.certification ||
              findAge?.release_dates[1]?.certification;

            return { id: movie.id, certification };
          })
        );

        const grouped = results.reduce<Record<number, string>>((acc, cur) => {
          if (cur.certification) {
            acc[cur.id] = cur.certification;
          }
          return acc;
        }, {});
        setAgeGroups(grouped);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    if (similarTitle.length > 0) {
      getCertification();
    }
  }, [similarTitle]);

  useEffect(() => {
    async function getMovieReleaseDate(): Promise<void> {
      if (!similarTitle.length) return;
      try {
        const results = await Promise.all(
          similarTitle.map(async (movie) => {
            const connection = await api.get<MoviesDetails>(
              `/movie/${movie.id}`
            );
            return {
              id: movie.id,
              release_date: connection.data.release_date.slice(0, 4),
            };
          })
        );

        const grouped = results.reduce<Record<number, string>>((acc, cur) => {
          acc[cur.id] = cur.release_date;
          return acc;
        }, {});
        
        setDateRelease(grouped);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getMovieReleaseDate();
  }, [similarTitle]);

  return (
    <Container>
      {similarTitle.slice(0, 9).map((element) => (
        <CardSimilarTitle
          key={element.id}
          id={element.id}
          backdrop_path={element.backdrop_path}
          overview={element.overview}
          name={element.name}
          title={element.title}
          age={ageGroups[element.id]}
          date_release={dateRelease[element.id]}
        />
      ))}
    </Container>
  );
};

export default SimilarTitle;
