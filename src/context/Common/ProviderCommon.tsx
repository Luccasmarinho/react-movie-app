import { useState } from "react";
import { CommonContext } from "./CommonContext";
import { PropsChildren } from "../../types/common/common";

const ProviderCommon = ({ children }: PropsChildren) => {
  const [navSelect, setNavSelect] = useState<string>("home");
  const [loading, setLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scrollMove, setScrollMove] = useState<boolean>(false);

  const values = {
    navSelect,
    setNavSelect,
    loading,
    setLoading,
    isClicked,
    setIsClicked,
    scrollMove,
    setScrollMove,
  };

  return (
    <CommonContext.Provider value={values}>{children}</CommonContext.Provider>
  );
};

export default ProviderCommon;
