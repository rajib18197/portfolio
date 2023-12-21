import styled from "styled-components";

const Heading = styled.h1`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  font-family: "Megrim", sans-serif;
  font-size: 3rem;
  color: #462626;
  background-image: linear-gradient(to right, #f37d46, #ff8162);
  position: relative;
  word-spacing: 3px;
  width: max-content;
  padding: 0.4rem 0.8rem;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
    text-align: center;
    /* width: 50%;
    margin: 0 auto; */
  }
`;

export default Heading;
