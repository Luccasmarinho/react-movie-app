import { createContext } from "react";
import { SeriesContextType } from "../../types/series/series"

export const SeriesContext = createContext<SeriesContextType>({} as SeriesContextType);