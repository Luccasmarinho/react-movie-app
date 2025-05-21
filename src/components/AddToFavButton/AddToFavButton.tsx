import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "./AddToFavButtonStyle";
import { useEffect, useState } from "react";
import { CardsProps } from "../../types/common/common";
import { toast } from "react-toastify";

const AddToFavButton = ({
  id,
  poster_path,
  vote_average,
  name,
  title,
}: CardsProps) => {
  const [btnAddFavIsClicked, setBtnAddFavIsClicked] = useState<boolean>(false);
  const localData = localStorage.getItem("fav");
  const localArray = localData ? JSON.parse(localData) : [];
  useEffect(() => {
    if (!localData) {
      localStorage.setItem("fav", JSON.stringify([]));
    } else {
      const findId = localArray.find((e: CardsProps) => e.id === id);
      findId ? setBtnAddFavIsClicked(true) : setBtnAddFavIsClicked(false);
    }
  }, [btnAddFavIsClicked]);

  function handleClick() {
    const objCard = {
      id,
      title,
      name,
      poster_path,
      vote_average,
    };

    if (!btnAddFavIsClicked) {
      localStorage.setItem("fav", JSON.stringify([...localArray, objCard]));
      setBtnAddFavIsClicked(true);
      toast.success(`${title} foi adicionado à sua lista de favoritos.`);
    } else {
      const filterLocalRemove = localArray.filter(
        (e: CardsProps) => e.id !== id
      );
      localStorage.setItem("fav", JSON.stringify(filterLocalRemove));
      setBtnAddFavIsClicked(false);
      toast.info(`${title} foi removido da sua lista de favoritos.`);
    }
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
