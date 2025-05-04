import { useEffect, useState, useContext } from "react";
import HalfRating from "../../HalfRating/HalfRating";
import {
  AreaCard,
  AreaTitleRating,
  AreaCardHide,
  AreaButton,
  Container,
} from "./CardsSeriesStyle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { AnimatePresence } from "framer-motion";
import { api } from "../../../service/api";
import { SeriesResponse, CardsSeriesProps } from "../../../types/series/series";
import { CommonContext } from "../../../context/Common/CommonContext";
import Loading from "../../Loading/Loading";

const CardsSeries = ({
  serieList,
  setSerie,
  paramsSerie,
}: CardsSeriesProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { loading, setLoading } = useContext(CommonContext);
  const cardsTotal: number = 4;
  const indice: number = 0; //max 3

  const start: number = cardsTotal * indice;
  const end: number = cardsTotal * (indice + 1);

  function handleActive() {
    setIsActive((prev) => !prev);
  }

  useEffect(() => {
    setLoading(true);
    async function getSeries() {
      try {
        const connection = await api.get<SeriesResponse>(`/tv/${paramsSerie}`);
        setSerie(connection.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getSeries();
  }, []);

  return (
    <>
      <Container>
        {loading && <Loading />}
        {serieList.slice(start, end).map((serie) => (
          <AreaCard key={serie.id}>
            <section>
              <img
                src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                alt={`Poster série${serie.name}`}
              />
              <AreaTitleRating>
                <p>{serie.name}</p>
                <HalfRating vote={serie.vote_average / 2} />
              </AreaTitleRating>
            </section>
          </AreaCard>
        ))}
      </Container>
      <AreaButton>
        <button onClick={handleActive}>
          {!isActive ? "Ver mais" : "Ver menos"}
          {!isActive ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </button>
      </AreaButton>
      <AnimatePresence>
        {isActive && (
          <Container>
            {loading && <Loading />}
            {serieList
              .slice(start + cardsTotal, end + cardsTotal)
              .map((serie) => (
                <AreaCardHide
                  key={serie.id}
                  initial={{ opacity: 0, height: 0, y: -60 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -60 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <section>
                    <img
                      src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                      alt={`Poster série${serie.name}`}
                    />
                    <AreaTitleRating>
                      <p>{serie.name}</p>
                      <HalfRating vote={serie.vote_average / 2} />
                    </AreaTitleRating>
                  </section>
                </AreaCardHide>
              ))}
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardsSeries;
