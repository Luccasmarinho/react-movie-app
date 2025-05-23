import { useContext } from "react";
import SectionAllCards from "../../SectionAllCards/SectionAllCards";
import { MovieContext } from "../../../context/Movie/MovieContext";

const MainContent = () => {
  const { AllMovies, setAllMovies } = useContext(MovieContext);
  return (
    <main style={{ margin: "0 30px" }}>
      <SectionAllCards
        title="Filmes"
        setMovie={setAllMovies}
        paramsMovie="/movie"
        movieList={AllMovies}
      />
    </main>
  );
};

export default MainContent;
