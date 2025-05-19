import { useEffect, useState } from "react";
// import ContainerCards from "../../ContainerCards/ContainerCards";
import { MoviePopular as MovieFav } from "../../../types/movies/movies";

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

  useEffect(() => {
    console.log("ok");
  }, [list]);

  return (
    <div>
      {/* <ContainerCards
        title="Lista de Favoritos"
        movieList={list}
        page={1}
        total_pages={500}
      /> */}
    </div>
  );
};

export default AllCardsFavorites;
