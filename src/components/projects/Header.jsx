import styled from "styled-components";

const StyledHeader = styled.div`
  color: white;
  background: transparent;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
`;

const Heading = styled.h1`
  font-family: "Megrim", sans-serif;
  font-size: 5rem;
  color: white;
  text-align: center;
  position: relative;
  word-spacing: 3px;

  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  color: #121718;
  line-height: 1;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Heading>The Personal API'S</Heading>
    </StyledHeader>
  );
}
