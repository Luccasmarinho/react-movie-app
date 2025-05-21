import { useContext, useEffect, useState } from "react";
import ContainerCards from "../../ContainerCards/ContainerCards";
import { MoviePopular as MovieFav } from "../../../types/movies/movies";
import { useSearchParams } from "react-router-dom";
import { MessageEmpty } from "./AllCardsFavoritesStyle";
import { CommonContext } from "../../../context/Common/CommonContext";
import Loading from "../../Home/Loading/Loading";

const AllCardsFavorites = () => {
  const [list, setList] = useState<MovieFav[]>(() => {
    const stored = localStorage.getItem("fav");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Erro ao fazer parse do localStorage:", error);
      return [];
    }
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const itemsPerPage: number = 20;
  const startIndex: number = (Number(page) - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentItems = list.slice(startIndex, endIndex);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const { loading, btnAddFavIsClicked } = useContext(CommonContext);

  function handleChange(_: React.ChangeEvent<unknown>, newValue: number) {
    setSearchParams({ page: newValue.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const stored = localStorage.getItem("fav");
    const storedParse = stored ? JSON.parse(stored) : [];
    setList(storedParse);
    storedParse.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
  }, [btnAddFavIsClicked]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : isEmpty ? (
        <MessageEmpty>A lista de favoritos está vazia.</MessageEmpty>
      ) : (
        <ContainerCards
          title="Lista de Favoritos"
          movieList={currentItems}
          page={Number(page)}
          total_pages={totalPages}
          Onchange={handleChange}
        />
      )}
    </div>
  );
};

export default AllCardsFavorites;
