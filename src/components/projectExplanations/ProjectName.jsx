import styled from "styled-components";

const Heading = styled.h2`
  font-size: 4rem;
  background-image: linear-gradient(
    45deg,
    rgb(115, 43, 247) 0%,
    rgb(125, 48, 248) 13%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  width: max-content;
  font-family: "Megrim", sans-serif;
  font-size: 6rem;
  color: white;
  transform: skewY(-5deg);
  text-align: center;
  position: relative;
  word-spacing: 3px;
  margin-bottom: 1.5rem;

  @media (max-width: 79em) {
    width: 100%;
    font-size: 5rem;
  }

  @media (max-width: 45em) {
    width: 100%;
    font-size: 4rem;
  }
`;

export default function ProjectName({ name }) {
  return <Heading>{name}</Heading>;
}
