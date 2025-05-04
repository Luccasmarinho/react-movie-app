import { createContext } from "react";
import { CommonContextType } from "../../types/common/common";

export const CommonContext = createContext<CommonContextType>({} as CommonContextType);
