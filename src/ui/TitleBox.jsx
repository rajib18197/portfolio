import styled from "styled-components";

const TitleBox = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  color: #f70672;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  width: 80%;
  margin: 0 auto;
  background-color: #fac5dd;
  padding: 0.8rem;
  border-radius: 3px;

  &::before,
  &::after {
    content: "";
    width: 60%;
    height: 3px;
    background-color: #f70672;
  }
`;

export default TitleBox;
