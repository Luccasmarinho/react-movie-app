import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Container, Box, AreaTitle } from "./SectionCardsSeriesStyle";
import CardsSeries from "./CardsSeries/CardsSeries";

import { CardsSeriesProps } from "../../types/series/series"

const SectionCards = ({ title, setSerie, serieList, paramsSerie }: CardsSeriesProps) => {
  return (
    <Container>
      <Box>
        <AreaTitle>
          <h1>{title}</h1>
          <button>
            Ver todos
            <KeyboardDoubleArrowRightIcon fontSize="small" />
          </button>
        </AreaTitle>
        <CardsSeries setSerie={setSerie} serieList={serieList} paramsSerie={paramsSerie} />
      </Box>
    </Container>
  );
};

export default SectionCards;
