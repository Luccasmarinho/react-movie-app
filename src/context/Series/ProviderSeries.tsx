import { useState } from "react";
import { Series, PropsChildren } from "../../types/series/series";
import { SeriesContext } from "./SeriesContext";

const ProviderSeries = ({ children }: PropsChildren) => {
  const [seriesPopular, setSeriesPopular] = useState<Series[]>([]);
  const [seriesTopRated, setSeriesTopRated] = useState<Series[]>([]);

  const values = {
    seriesPopular,
    setSeriesPopular,
    seriesTopRated,
    setSeriesTopRated,
  };

  return (
    <SeriesContext.Provider value={values}>{children}</SeriesContext.Provider>
  );
};

export default ProviderSeries;
