import { Container } from "./AgeGroupStyle";

interface MovieAgeGroupsProps {
  age: string | undefined;
}

const AgeGroup = ({ age }: MovieAgeGroupsProps) => {
  return (
    <Container age={age}>
      <p>{age}</p>
    </Container>
  );
};

export default AgeGroup;
