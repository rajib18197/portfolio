import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import styled, { css } from "styled-components";

const StyledSocial = styled.div`
  display: flex;
  /* ${(props) =>
    props.variation === "vertical"
      ? css`
          flex-direction: column;
          gap: 1.6rem;
        `
      : css`
          justify-content: center;
          gap: 3rem;
        `} */

  justify-content: center;
  gap: 3rem;
  background-color: #fa6c38;
  padding: 0.5rem;
  border-radius: 4px;
  width: max-content;
  margin: auto;
  /* margin-bottom: 8rem; */
`;

const Link = styled.a`
  width: 4rem;
  height: 4rem;
  background-color: #191630;
  padding: 1rem;
  /* transform: rotate(221deg); */
  line-height: 1;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    /* position: relative; */
    width: 3rem;
    height: 3rem;
    /* display: inline-block; */
    /* margin-right: 2rem; */
    fill: #eae5ff;
    transition: all 0.3s;
    /* transform: rotate(-221deg); */
  }
`;

export default function Social({ variation }) {
  return (
    <StyledSocial variation={variation}>
      <Link href="#">
        <FaGithub />
      </Link>
      <Link href="#">
        <FaLinkedin />
      </Link>

      {/* <Link href="#">
        <BiLogoGmail />
      </Link> */}
    </StyledSocial>
  );
}
