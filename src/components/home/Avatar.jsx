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
  font-family: "Megrim", sans-serif;
  letter-spacing: 1px;
  position: absolute;
  bottom: 5rem;
  left: -5%;
  font-size: 1.4rem;
  text-align: center;
  text-transform: capitalize;
  width: 110%;
  font-weight: 600;

  background-color: #111827;
  /* border-left: 2px solid #121212; */
  border-radius: 3px;
  padding: 1rem;
  color: #ffffff;
  & span {
    color: #d0cbff;
  }

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
  border-radius: 50px;
  border: 3px solid var(--color-silver-700);
  object-fit: cover;

  @media (max-width: 59em) {
    width: 100%;
  }

  /* @media (max-width: 45em) {
    height: 50;
  } */
`;

export default function Avatar() {
  return (
    <StyledAvatar>
      <Img src="avatar.jpg" alt="Image" />
      <FigCaption>
        <span>
          Prioritizing my <span>unjustifiable</span> Learning & growth
        </span>
      </FigCaption>
    </StyledAvatar>
  );
}
