import { useEffect, useState, useContext } from "react";
import { AreaButton, Container } from "./CardsSeriesStyle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { AnimatePresence } from "framer-motion";
import { api } from "../../../service/api";
import { SeriesResponse, CardsSeriesProps } from "../../../types/series/series";
import { CommonContext } from "../../../context/Common/CommonContext";
import Loading from "../../Loading/Loading";
import Cards from "../../Cards/Cards";

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
          <Cards
            key={serie.id}
            id={serie.id}
            poster_path={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
            name={serie.name}
            vote_average={serie.vote_average / 2}
          />
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
          <Container
            key="cardsHide"
            initial={{ opacity: 0, height: 0, y: -60 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -60 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {loading && <Loading />}
            {serieList
              .slice(start + cardsTotal, end + cardsTotal)
              .map((serie) => (
                <Cards
                  key={serie.id}
                  id={serie.id}
                  poster_path={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                  name={serie.name}
                  vote_average={serie.vote_average / 2}
                />
              ))}
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardsSeries;
