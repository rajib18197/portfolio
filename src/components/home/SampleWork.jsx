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
    background-color: #ecacff49;
    /* background-color: #d1cbff84; */
    z-index: -2;
  }
  &::after {
    width: 25%;
    padding-bottom: 25%;
    background-color: #95c0b228;
    background-color: #efb9ff;

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
      background-color: #8048e729;
      background-color: #3a29d6b0;
      z-index: -2;
    }
    &::after {
      width: 25%;
      padding-bottom: 25%;
      background-color: #95c0b228;
      background-color: #efb9ff;

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
  /* border: 20px solid #faf0fa; */
  outline: 25px solid #faf0fa;
  z-index: 1000;

  /* z-index: -3; */
  box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);

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

  /* @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 2 / span 1;
  } */
`;

export default function SampleWork() {
  return (
    <StyledSampleWork>
      <ProjectImage src="enterprise-coverr.png" alt="Sample Work 1" />
      <ProjectImage src="eatrovion-cover.png" alt="Sample Work 2" />
    </StyledSampleWork>
  );
}
