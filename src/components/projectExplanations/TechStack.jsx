import styled from "styled-components";
import TitleBox from "../../ui/TitleBox";
import TechSkill from "./TechSkill";

const StyledTechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const TechList = styled.ul`
  line-height: 1.7;
  list-style: none;
  font-size: 1.9rem;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  & li {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 1rem;
  }
`;

export default function TachStack({ techStacks }) {
  return (
    <StyledTechStack>
      <TitleBox>Tech stack I decided to use</TitleBox>
      <TechList>
        {techStacks.map((skill, i) => (
          <TechSkill key={i} skill={skill} index={i} />
        ))}
      </TechList>
    </StyledTechStack>
  );
}
