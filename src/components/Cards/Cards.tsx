import HalfRating from "../Home/HalfRating/HalfRating";
import { AreaCard, AreaTitleRating } from "./CardsStyle";
import { CardsProps } from "../../types/common/common";
import SkeletonCards from "../SkeletonCards/SkeletonCards";
import { useContext } from "react";
import { CommonContext } from "../../context/Common/CommonContext";
import noImage from "../../assets/No_Image_Available.jpg";
import { Link, useLocation } from "react-router-dom";
import { handleSession } from "../../utils/utils";
const Cards = ({ id, poster_path, title, name, vote_average }: CardsProps) => {
  const { loading, setPath } = useContext(CommonContext);
  const location = useLocation();

  return (
    <Link
      to={`/details/${id}/${title || name}`}
      state={{ backgroundLocation: location }}
    >
      <AreaCard
        key={id}
        onClick={() => handleSession("s", location.pathname, setPath)}
      >
        {loading ? (
          <SkeletonCards />
        ) : (
          <section>
            <img
              src={
                !poster_path
                  ? noImage
                  : `https://image.tmdb.org/t/p/original${poster_path}`
              }
              alt={`Poster ${title || name}`}
            />
            <AreaTitleRating>
              <p>{title || name}</p>
              <HalfRating vote={vote_average} />
            </AreaTitleRating>
          </section>
        )}
      </AreaCard>
    </Link>
  );
};

export default Cards;
