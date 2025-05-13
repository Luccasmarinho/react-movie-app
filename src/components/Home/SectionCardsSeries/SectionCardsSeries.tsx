import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Container, Box, AreaTitle } from "./SectionCardsSeriesStyle";
import CardsSeries from "./CardsSeries/CardsSeries";
import { CardsSeriesProps } from "../../../types/series/series"
import { Link } from "react-router-dom";
import {handleSession} from "../../../utils/utils"
import { useContext } from "react";
import { CommonContext } from "../../../context/Common/CommonContext";

const SectionCards = ({ title, setSerie, serieList, paramsSerie }: CardsSeriesProps) => {
  const { setNavSelect } = useContext(CommonContext);
  return (
    <Container>
      <Box>
        <AreaTitle>
          <h1>{title}</h1>
          <Link to={"/series"}>
            <button onClick={() => handleSession("n", "series", setNavSelect)}>
              Ver todos
              <KeyboardDoubleArrowRightIcon fontSize="small" />
            </button>
          </Link>
        </AreaTitle>
        <CardsSeries setSerie={setSerie} serieList={serieList} paramsSerie={paramsSerie} />
      </Box>
    </Container>
  );
};

export default SectionCards;
