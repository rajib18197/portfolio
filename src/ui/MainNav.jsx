import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
// import DarkModeToggle from "./DarkModeToggle";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100%; */
  padding: 0 0 0 0;
  padding: 1rem 0;
  position: fixed;
  top: 50%;
  left: 0%;
  transform: translate(0, -50%);
  background-color: rgba(255, 255, 255, 0.2);
  /* backdrop-filter: blur(10px); */
  /* background-image: linear-gradient(260deg, #ff4f8b 60%, #dff1ff 40%); */
  background-image: linear-gradient(#ad9bfd, #d0adfd);
  /* backdrop-filter: blur(30px); */
  color: white;
  z-index: 2000;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: var(--color-grey-600);
    // background-color: var(--color-grey-200);

    // border-radius: 4px;
    // border-left: 4px solid var(--color-brand-600);
    // border-bottom-left-radius: 100px;

    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.4rem;
    /* padding: 1.2rem 1.4rem; */
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
    /* background-color: var(--color-green-700); */
    /* color: var(--color-grey-100); */
    // border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.1rem;
    height: 2.1rem;
    color: var(--color-brand-600);
    // border-radius: 50%;
    // padding: 2rem;
    /* background-color: var(--color-brand-600); */
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <Nav>
      <NavList>
        <li>
          <StyledNavLink to="/home">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">
            <HiOutlineCalendarDays />
            <span>Projects</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            <HiOutlineHomeModern />
            <span>About</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/projects/:id">
            <HiOutlineUsers />
          </StyledNavLink>
        </li> */}
      </NavList>
    </Nav>
  );
}

export default MainNav;
