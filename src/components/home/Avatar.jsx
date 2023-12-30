import { GrDocumentPdf } from "react-icons/gr";
import styled from "styled-components";

const StyledAvatar = styled.div`
  width: 100%;
  grid-column: 1 / span 1;
  grid-row: 1 / -1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-rows: 2fr 1fr; */

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
  bottom: 2rem;
  left: 0%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;

  background-color: #fff8f8d8;
  padding: 0.5rem;

  & > p {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right bottom, #2998ff, #5643fa);

    background-clip: text;
    color: transparent;
    letter-spacing: 0.5px;

    & span {
      background-image: none;
      color: white;
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
  border-radius: 10px;
  object-fit: cover;
  /* border: 4px solid #eb2f64; */
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

  @media (max-width: 59em) {
    width: 100%;
  }
`;

const StyledNavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  /* justify-self: end; */
  align-self: end;
  gap: 1rem;
  width: max-content;
  margin: auto;
  /* font-family: "Megrim", sans-serif; */
  font-size: 1.4rem;
  color: #f8f6f6;
  background-color: #27192b;
  position: relative;
  word-spacing: 3px;
  width: max-content;
  padding: 0.4rem 0.8rem;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 400;

  @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
    text-align: center;
    /* width: 50%;
    margin: 0 auto; */
  }
`;
export default function Avatar() {
  return (
    <StyledAvatar>
      <Img src="raju.jpg" alt="Image of myself" />
      <FigCaption>
        <p>
          Doing Nothing but Experimenting
          {/* <span>📚</span> Prioritizing my unJustifiable Learning & growth{" "} */}
          {/* <span>📈</span> */}
        </p>
        <div>
          <StyledNavLink
            href="https://drive.google.com/uc?export=download&id=17Tt2qOBhJZ8Uw4YOQApo3yPUWUNljhsH"
            download={true}
            target="_blank"
          >
            <GrDocumentPdf />
            <span>Download Resume</span>
          </StyledNavLink>
        </div>
      </FigCaption>
    </StyledAvatar>
  );
}
