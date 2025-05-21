import { useEffect, useState } from "react";
import ContainerCards from "../../ContainerCards/ContainerCards";
import { MoviePopular as MovieFav } from "../../../types/movies/movies";
import { useSearchParams } from "react-router-dom";

const AllCardsFavorites = () => {
  const [list, _] = useState<MovieFav[]>(() => {
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

  function handleChange(_: React.ChangeEvent<unknown>, newValue: number) {
    setSearchParams({ page: newValue.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    console.log("ok");
  }, [list]);

  return (
    <div>
      <ContainerCards
        title="Lista de Favoritos"
        movieList={currentItems}
        page={Number(page)}
        total_pages={totalPages}
        Onchange={handleChange}
      />
    </div>
  );
};

export default AllCardsFavorites;
