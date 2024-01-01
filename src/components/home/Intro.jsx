import styled from "styled-components";
import Social from "../../ui/Social";

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  grid-column: 2 / -1;
  grid-row: 1 / span 1;
  width: 100%;
  /* background-color: orange; */

  @media (max-width: 70em) {
    width: max-content;
    justify-self: center;
  }

  @media (max-width: 59em) {
    width: 100%;
    text-align: center;
    justify-self: start;
  }

  @media (max-width: 45em) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
  }
`;

const Name = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 5.7rem;
  color: white;
  word-spacing: 3px;
  display: flex;
  gap: 3rem;
  font-weight: 400;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 400;
  line-height: 1;

  @media (max-width: 70em) {
    font-size: 6.5rem;
  }

  @media (max-width: 66em) {
    font-size: 5.5rem;
  }

  @media (max-width: 59em) {
    font-size: 4.5rem;
  }

  & span {
    color: white;
  }
`;
const Secondary = styled(Name)`
  display: grid;
  grid-template-columns: max-content 60px;
  gap: 1.6rem;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 4px;
    background-color: #444;
  }

  @media (max-width: 70em) {
    &::after {
      content: "";
      display: none;
    }
    grid-template-columns: 1fr;
  }
`;

export default function Intro() {
  return (
    <StyledIntro>
      {/* <Name>
        <span>📚</span> Hi, I'm Rajib! <span>📈</span>
      </Name> */}
      <Name>Hi, I'm Rajib Das!</Name>
      <Secondary>Frontend Engineer</Secondary>
    </StyledIntro>
  );
}
