import { useSearchParams } from "react-router-dom";
import ContainerCards from "../../ContainerCards/ContainerCards";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../service/api";
import { MoviePopular, MoviesResponse } from "../../../types/movies/movies";
import { CommonContext } from "../../../context/Common/CommonContext";

const AllCardsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useSearchParams();
  const { valueInputSearch } = useContext(CommonContext);
  const [list, setList] = useState<MoviePopular[]>([]);
  const page = searchParams.get("page") || 1;
  const q = query.get("q");

  useEffect(() => {
    setQuery({ q: valueInputSearch });
    async function getSearch() {
      try {
        const connection = await api.get<MoviesResponse<MoviePopular[]>>(
          `/search/multi?query=${q}&page=${page}`
        );
        // console.log(connection);
        setList(connection.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    getSearch();
  }, [page, valueInputSearch]);

  function handleChange(_: React.ChangeEvent<unknown>, newValue: number) {
    setSearchParams({ page: newValue.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
      <ContainerCards
        Onchange={handleChange}
        page={Number(page)}
        movieList={list}
        title="Calma"
      />
    </div>
  );
};

export default AllCardsSearch;
