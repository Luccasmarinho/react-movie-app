import BasicPagination from "../BasicPagination/BasicPagination"
import Cards from "../Cards/Cards"
import { Container, AreaTitle, Box, AreaCard, AreaPagination } from "./ContainerCardsStyle";
import {ContainerCardsProps} from "../../types/movies/movies";

const ContainerCards = ({ title, movieList, Onchange, page, total_pages }: ContainerCardsProps) => {
  return (
    <Container>
    <AreaTitle>
      <h1>{title}</h1>
    </AreaTitle>
    <Box>
      <AreaCard>
        {movieList.map((movie) => (
          <Cards
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average / 2}
            title={movie.title}
            name={movie.name}
          />
        ))}
      </AreaCard>
    </Box>
    <AreaPagination>
      <BasicPagination OnChange={Onchange} page={Number(page)} total_pages={total_pages}/>
    </AreaPagination>
  </Container>
  )
}

export default ContainerCards