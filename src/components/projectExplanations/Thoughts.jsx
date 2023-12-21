import styled from "styled-components";
import ThoughtBox from "./ThoughtBox";
import TitleBox from "../../ui/TitleBox";

const StyledThoughts = styled.div`
  font-size: 1.8rem;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ThoughtsList = styled.div`
  hyphens: none;
  /* padding: 0 2rem; */
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default function Thoughts({ thoughts }) {
  return (
    <StyledThoughts>
      <TitleBox>Here's how I think about it</TitleBox>

      <ThoughtsList>
        {thoughts.map((thought) => (
          <ThoughtBox key={thought} thought={thought} />
        ))}
      </ThoughtsList>
    </StyledThoughts>
  );
}
