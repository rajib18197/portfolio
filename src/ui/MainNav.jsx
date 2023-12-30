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
  background-color: #101d28;
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

    /* color: var(--color-grey-600); */

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
  }

  & svg {
    width: 2.1rem;
    height: 2.1rem;
    color: var(--color-brand-100);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-800);
  }
`;

function MainNav({ options }) {
  return (
    <Nav>
      <NavList>
        {options.map((option) => (
          <li key={option.label}>
            <StyledNavLink to={option.path}>
              {option.icon}
              <span>{option.label}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </Nav>
  );
}

export default MainNav;
