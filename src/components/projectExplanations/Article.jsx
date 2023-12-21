import Challenges from "./Challenges";
import Description from "./Description";
import Requirements from "./Requirements";
import TechStack from "./TechStack";

import styled from "styled-components";
import Thoughts from "./Thoughts";
import Learnings from "./Learnings";

const Container = styled.div`
  width: 68rem;
  margin: 0 auto;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 12rem;

  @media (max-width: 45em) {
    width: 100%;
  }
`;

export default function Article({ article }) {
  const {
    explanations: {
      descriptions,
      techStacks,
      requirements,
      challenges,
      thoughts,
      learnings,
    } = {},
  } = article || {};

  return (
    <Container>
      <Description descriptions={descriptions} />

      <TechStack techStacks={techStacks} />

      <Requirements requirements={requirements} />

      <Challenges challenges={challenges} />

      <Thoughts thoughts={thoughts} />

      <Learnings learnings={learnings} />
    </Container>
  );
}
