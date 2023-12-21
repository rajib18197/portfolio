import styled, { css } from "styled-components";

const PageContainer = styled.div`
  background-color: rgb(241, 207, 252);
  width: 125rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow-dark);
  height: 55rem;

  ${(props) =>
    props.scrollcontainer &&
    css`
      color: #121212;

      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 4px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--color-silver-700);
        border-radius: 4px;
      }
    `}

  @media (max-width: 79em) {
    max-width: 125rem;
    width: 100%;
    height: auto;

    ${(props) =>
      props.scrollcontainer &&
      css`
        /* max-width: 125rem; */
        max-width: none;
        width: 100rem;
        height: 55rem;
      `}
  }
  @media (max-width: 59em) {
    height: 100%;

    ${(props) =>
      props.scrollcontainer &&
      css`
        max-width: 125rem;
        width: 100%;
        height: 55rem;
      `}
  }
`;

export default PageContainer;

PageContainer.defaultProps = {
  scrollcontainer: false,
};
