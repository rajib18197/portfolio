import styled from "styled-components";

const StyledAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Container = styled.div`
  padding-top: 3rem;
  display: grid;
  grid-row: 3 / -1;
  grid-template-columns: max-content max-content max-content max-content;
  grid-template-rows: min-content min-content min-content;
  justify-content: center;
  font-family: "Megrim", sans-serif;

  color: #444;
  font-size: 1.8rem;

  @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 4 / span 1;
  }
`;
const Heading3 = styled.h5`
  padding: 0 0.4rem 0 1rem;
  padding: 0.6rem 0.6rem 0.6rem 1rem;

  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  background-color: white;
  font-size: 4rem;
  text-transform: uppercase;

  & span {
    vertical-align: top;
    display: inline-block;
    transform: translateY(-4px) scale(1.4, 1.9);
  }
`;

const Heading4 = styled.h5`
  padding: 0.1rem;
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  background-color: white;
`;

const Heading5 = styled.h5`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  background-color: white;
`;

const Heading6 = styled.h5`
  padding: 0.1rem;
  grid-column: 2 / -1;
  grid-row: 3 / span 1;
  background-color: white;
`;

export default function Action() {
  return (
    <StyledAction>
      <Container>
        <Heading3>
          <span>S</span>
        </Heading3>
        <Heading4>ounds great?</Heading4>
        <Heading5>If</Heading5>
        <Heading6>
          you are looking for a developer, feel free to reach out.
        </Heading6>
      </Container>
    </StyledAction>
  );
}

// The more you see it the more comfortable you feel
