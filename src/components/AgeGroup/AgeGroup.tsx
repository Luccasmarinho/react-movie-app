import { Container } from "./AgeGroupStyle";

interface MovieAgeGroupsProps {
  age: string | undefined;
}

const AgeGroup = ({ age }: MovieAgeGroupsProps) => {
  return (
    <Container age={age}>
      <p>{age?.replace("e", "")}</p>
    </Container>
  );
};

export default AgeGroup;
