import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "./AddToFavButtonStyle";
import { useEffect, useState } from "react";
import { CardsProps } from "../../types/common/common";

const AddToFavButton = ({
  id,
  poster_path,
  vote_average,
  name,
  title,
}: CardsProps) => {
//   const [btnAddFavIsClicked, setBtnAddFavIsClicked] = useState<boolean>(() => {
//     const localData = localStorage.getItem("fav");
//     const localArray = localData ? JSON.parse(localData) : [];
//     const findId = localArray.find((e: CardsProps) => e.id === id);
//     return findId ? true : false;
//   });

const [btnAddFavIsClicked, setBtnAddFavIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const localData = localStorage.getItem("fav");
    const localArray = localData ? JSON.parse(localData) : [];
    const objCard = {
      id,
      title,
      name,
      poster_path,
      vote_average,
    };

    if (!localData) {
      localStorage.setItem("fav", JSON.stringify([]));
    }

    if (btnAddFavIsClicked) {
      localStorage.setItem("fav", JSON.stringify([...localArray, objCard]));
    } else {
      const filterLocalRemove = localArray.filter(
        (e: CardsProps) => e.id !== id
      );
      localStorage.setItem("fav", JSON.stringify(filterLocalRemove));
    }
  }, [btnAddFavIsClicked]);

  function handleClick() {
    setBtnAddFavIsClicked((prev) => !prev);
    // const objCard = {
    //   id,
    //   title,
    //   name,
    //   poster_path,
    //   vote_average,
    // };

    // if (btnAddFavIsClicked) {
    //   const localData = localStorage.getItem("fav");
    //   const localArray = localData ? JSON.parse(localData) : [];
    //   localStorage.setItem("fav", JSON.stringify([...localArray, objCard]));
    // } else {
    //   const localData = localStorage.getItem("fav");
    //   const localArray = localData ? JSON.parse(localData) : [];
    //   const filterLocalRemove = localArray.filter(
    //     (e: CardsProps) => e.id !== id
    //   );
    //   localStorage.setItem("fav", JSON.stringify(filterLocalRemove));
    // }
  }

  return (
    <div>
      <Button onClick={handleClick}>
        {!btnAddFavIsClicked ? <AddIcon /> : <DoneIcon />}
      </Button>
    </div>
  );
};

export default AddToFavButton;
