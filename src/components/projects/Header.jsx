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
  font-size: 3rem;
  font-weight: 800;
  color: white;
  text-align: center;
  position: relative;
  word-spacing: 3px;

  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  color: #121718;
  line-height: 1;
  /* 
  & span {
    text-transform: lowercase;
    font-size: 4rem;
    font-weight: 600;
  } */
`;

export default function Header() {
  return (
    <StyledHeader>
      <Heading>Personal APIs Revealed!</Heading>
    </StyledHeader>
  );
}
