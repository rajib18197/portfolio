import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import styled, { css } from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100%; */
  padding: 1rem 0;
  position: fixed;
  top: 50%;
  right: 0%;
  transform: translate(0, -50%);
  background-color: #221829;

  color: white;
  z-index: 2000;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const StyledNavLink = styled.a`
  &:link,
  &:visited {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: #ffffff;

    font-size: 1.08rem;
    font-weight: 600;
    padding: 0.35rem;
    /* padding: 1.2rem 1.4rem; */
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-300);
  }

  & svg {
    width: 2.1rem;
    height: 2.1rem;
    color: var(--color-brand-600);
    color: #767676;
    color: #8b54f1;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const StyledSocial = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  right: 0;
  transform: translate(-20%, 0);

  justify-content: center;
  gap: 1rem;
  background-color: #48c448;
  /* padding: 0.5rem; */
  border-radius: 4px;
  width: max-content;
  margin: auto;
  /* margin-bottom: 8rem; */
`;

const Link = styled.a`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #191630;
  /* padding: 1rem; */
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
    fill: #eae5ff;
    transition: all 0.3s;
  }
`;

export default function Social({ options }) {
  return (
    <Nav>
      <NavList>
        {options.map((option) => (
          <li key={option.id}>
            <StyledNavLink
              href={option.href}
              download={option.download}
              target={`${option.download ? "" : "_blank"}`}
            >
              {option.icon}
              <span>{option.label}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </Nav>
  );
}
