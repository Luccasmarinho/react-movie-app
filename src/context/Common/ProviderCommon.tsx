import { useState } from "react";
import { CommonContext } from "./CommonContext";
import { PropsChildren } from "../../types/common/common";

const ProviderCommon = ({ children }: PropsChildren) => {
  const [navSelect, setNavSelect] = useState<string>((): string => {
    return sessionStorage.getItem("n") || "home";
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scrollMove, setScrollMove] = useState<boolean>(false);
  const [valueInputSearch, setValueInputSearch] = useState<string>("")
  const [path, setPath] = useState<string>((): string => {
    return sessionStorage.getItem("s") || "/"
  });
  const [btnAddFavIsClicked, setBtnAddFavIsClicked] = useState<boolean>(false);


  const values = {
    navSelect,
    setNavSelect,
    loading,
    setLoading,
    isClicked,
    setIsClicked,
    scrollMove,
    setScrollMove,
    path,
    setPath,
    valueInputSearch,
    setValueInputSearch,
    btnAddFavIsClicked,
    setBtnAddFavIsClicked
  };

  return (
    <CommonContext.Provider value={values}>{children}</CommonContext.Provider>
  );
};

export default ProviderCommon;
