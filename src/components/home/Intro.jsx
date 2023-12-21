import styled from "styled-components";
import Social from "../../ui/Social";

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  }

  @media (max-width: 45em) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
  }
`;

const Name = styled.h1`
  font-family: "Megrim", sans-serif;
  font-size: 7rem;
  color: white;

  position: relative;
  word-spacing: 3px;

  text-transform: uppercase;
  font-weight: 400;
  color: #121718;
  line-height: 1;

  @media (max-width: 70em) {
    font-size: 6.5rem;
  }

  @media (max-width: 66em) {
    font-size: 5.5rem;
  }

  @media (max-width: 59em) {
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    height: 100%;
    font-size: 4rem;
  }
`;
const Secondary = styled(Name)`
  /* display: grid;
  grid-template-columns: 1fr 80px; */
  /* background-color: oldlace; */
  display: flex;
  gap: 1rem;
  align-items: center;
  /* position: relative; */

  /* &::after {
    content: "";
    display: block;
    height: 4px;
    background-color: #5f5de1;
    transform: translateX(-45px);
  }

  @media (max-width: 70em) {
    &::after {
      content: "";
      display: none;
    }
    grid-template-columns: 1fr;
  } */
`;

export default function Intro() {
  return (
    <StyledIntro>
      {/* <Name>🏝️ Hi I'm Virat kohli 🧳</Name> */}
      <Name>📚 Hi I'm Virat kohli 📈</Name>
      <Secondary>
        Frontend Engineer
        <Social />
      </Secondary>
    </StyledIntro>
  );
}
