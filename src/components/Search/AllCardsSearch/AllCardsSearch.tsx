import { useNavigate, useSearchParams } from "react-router-dom";
import ContainerCards from "../../ContainerCards/ContainerCards";
import { useContext, useEffect, useRef, useState } from "react";
import { api } from "../../../service/api";
import { MoviePopular, MoviesResponse } from "../../../types/movies/movies";
import { CommonContext } from "../../../context/Common/CommonContext";
import Loading from "../../Home/Loading/Loading";
import { MessageEmpty } from "./AllCardsSearchStyle";

const AllCardsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { valueInputSearch, loading, setLoading } = useContext(CommonContext);
  const [list, setList] = useState<MoviePopular[]>([]);
  const [totalPages, setTotalPages] = useState<number>();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const page = searchParams.get("page") || 1;
  const navigate = useNavigate();
  const prevSearchRef = useRef(valueInputSearch);

  useEffect(() => {
    setLoading(true);
    if (!valueInputSearch) {
      navigate("/");
      return;
    }

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("q", valueInputSearch);
      if (prevSearchRef.current !== valueInputSearch) {
        newParams.set("page", "1");
      }
      return newParams;
    });

    prevSearchRef.current = valueInputSearch;

    async function getSearch() {
      try {
        const connection = await api.get<MoviesResponse<MoviePopular[]>>(
          `/search/multi?query=${valueInputSearch}&page=${page}`
        );

        if (connection.data.results.length === 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }

        setTotalPages(connection.data.total_pages);
        setList(connection.data.results);
        setLoading(false);
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
      {loading ? (
        <Loading />
      ) : isEmpty ? (
        <MessageEmpty>
          Não encontramos resultados para "{valueInputSearch}"
        </MessageEmpty>
      ) : (
        <ContainerCards
          Onchange={handleChange}
          page={Number(page)}
          movieList={list}
          title={valueInputSearch}
          total_pages={totalPages}
        />
      )}
    </div>
  );
};

export default AllCardsSearch;
