import styled from "styled-components";
import { getProjects } from "../../services/apiProjects";
import { useHttp } from "../../hooks/useHttp";

const StyledSampleWork = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / span 1;
  padding: 2rem;

  position: relative;
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;

  @media (max-width: 45em) {
    grid-template-columns: 1fr;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    width: 35%;
    padding-bottom: 35%;
    /* background-color: #fdf2e9; */
    background-color: #ede9fe;
    z-index: -2;
  }
  &::after {
    width: 25%;
    padding-bottom: 25%;
    /* background-color: #ffede0; */
    background-color: #e4e0f3;
    background-color: #e6e2f7;

    z-index: -1;
  }

  @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 2 / span 1;
    padding: 1rem;
    /* background-color: rebeccapurple; */

    &::before {
      width: 35%;
      padding-bottom: 35%;
      z-index: -2;
    }
    &::after {
      width: 25%;
      padding-bottom: 25%;

      z-index: -1;
    }
  }

  @media (max-width: 45em) {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
  }
`;

const ProjectImage = styled.img`
  display: block;
  max-width: 75%;
  object-fit: cover;
  filter: drop-shadow(0 0 5px #002fff, 0 0 5px #0051ff, 0 0 5px #1900ff);
  outline: 23px solid #f7f7f7;
  z-index: 1000;

  /* z-index: -3; */
  box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  &:last-child {
    justify-self: end;
  }

  @media (max-width: 70em) {
    justify-self: center;
    z-index: 1000;

    &:last-child {
      justify-self: center;
    }
  }
`;

export default function SampleWork() {
  return (
    <StyledSampleWork>
      <ProjectImage src="enterprise-coverr.png" alt="Sample Work 1" />
      <ProjectImage src="eatrovion-cover.png" alt="Sample Work 2" />
    </StyledSampleWork>
  );
}
