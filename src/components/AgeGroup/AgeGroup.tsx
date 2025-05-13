import { Container } from "./AgeGroupStyle";
import {MovieAgeGroupsProps} from "../../types/common/common"

const AgeGroup = ({ age }: MovieAgeGroupsProps) => {
  return (
    <Container age={age}>
      <p>{age?.replace("e", "")}</p>
    </Container>
  );
};

export default AgeGroup;
