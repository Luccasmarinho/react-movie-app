import { useContext } from "react";
import { SeriesContext } from "../../../context/Series/SeriesContext";
import SectionAllCards from "../../SectionAllCards/SectionAllCards";

const MainContent = () => {
  const { allSeries, setAllSeries } = useContext(SeriesContext);

  return (
    <main style={{ margin: "0 30px" }}>
      <SectionAllCards
        title="Séries"
        setMovie={setAllSeries}
        paramsMovie="/tv"
        movieList={allSeries}
      />
    </main>
  );
};

export default MainContent;
