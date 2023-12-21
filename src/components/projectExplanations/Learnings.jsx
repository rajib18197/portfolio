import styled from "styled-components";
import LearningPoint from "./LearningPoint";
import TitleBox from "../../ui/TitleBox";

const StyledLearnings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const LearningList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 1rem;
  border: 2px solid #222;
  border: 3px solid rgb(247, 43, 104);
  outline: 2px solid #222;
  outline: 3px solid rgb(247, 43, 111);
  outline-offset: 1.2rem;
`;

export default function Learnings({ learnings }) {
  return (
    <StyledLearnings>
      <TitleBox>Framing Reflections</TitleBox>
      <LearningList>
        {learnings.map((learning) => (
          <LearningPoint key={learning} learning={learning} />
        ))}
      </LearningList>
    </StyledLearnings>
  );
}
