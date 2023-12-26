import styled from "styled-components";

const StyledAvatar = styled.div`
  width: 100%;
  grid-column: 1 / span 1;
  grid-row: 1 / -1;
  position: relative;

  @media (max-width: 59em) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
  }

  @media (max-width: 45em) {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
  }
`;

const FigCaption = styled.figcaption`
  font-family: "poppins", sans-serif;
  position: absolute;
  bottom: 5rem;
  left: -5%;
  font-size: 1.3rem;
  text-align: center;
  text-transform: capitalize;
  width: 110%;
  font-weight: 400;
  letter-spacing: 0.75px;
  color: white;
  /* color: #0004ff; */
  /* text-shadow: 0 0 5px #002fff, 0 0 5px #0051ff, 0 0 5px #1900ff; */

  background-color: #181718;
  /* border-left: 2px solid #121212; */
  border-radius: 3px;
  padding: 1rem 0.4rem;

  & > span {
    & span {
      display: inline-block;
      transform: translateY(-4px);
    }
  }

  @media (max-width: 78em) {
    width: 115%;
    z-index: 3000;
  }

  @media (max-width: 70em) {
    max-width: 100%;
    left: 0;
    z-index: 3000;

    & > span {
      & span {
        display: inline-block;
        transform: translateY(0);
      }
    }
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  /* border: 4px solid #f03; */
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(to right bottom, #ffb900, #ff7730);
  background-blend-mode: screen;
  /* background-image: conic-gradient(#213, #112 50%, #213),
    conic-gradient(transparent 20%, #08f, #f03);

  background-position: center center;
  background-repeat: no-repeat; */
  @media (max-width: 59em) {
    width: 100%;
  }
`;

export default function Avatar() {
  return (
    <StyledAvatar>
      <Img src="raju.jpg" alt="Image of myself" />
      <FigCaption>
        <span>
          📚 Prioritizing my <span>unjustifiable</span> Learning & growth 📈
        </span>
      </FigCaption>
    </StyledAvatar>
  );
}
