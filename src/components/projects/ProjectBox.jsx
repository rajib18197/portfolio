import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledProject = styled.div`
  display: grid;
`;

const Figure = styled.figure`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  height: 20rem;
  row-gap: 1rem;
  padding: 0.6rem;
  background-color: #ede9fe;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  color: #241d25;
  border-radius: 6px;

  @media (max-width: 59em) {
    height: 30rem;
  }

  @media (max-width: 45em) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

const ImageBox = styled.div`
  position: relative;
  grid-row: 1 / span 1;
  grid-column: 1 / 2;

  & img {
    width: 100%;
    /* height: 100%; */
    outline: 5px solid #fdf8f4;
    object-fit: cover;
    object-position: center;
    /* border-radius: 4px; */
    display: block;
    transition: all 0.3s ease-in-out;
    border-color: #a033fa;
    box-shadow: 0 0 8px #a033fa;

    @media (max-width: 59em) {
      height: 30rem;
    }

    @media (max-width: 45em) {
      height: 20rem;
    }
  }

  @media (max-width: 45em) {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
  }
`;

const OverView = styled.div`
  grid-row: 1 / span 1;
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  transition: all 0.3s;
  z-index: 90;

  @media (max-width: 45em) {
    grid-column: 1 / -1;
    grid-row: 2 / span 1;
  }
`;

const FigCaption = styled.figcaption`
  font-size: 1.2rem;
`;

const Name = styled.div`
  width: max-content;
  padding: 0.6rem 0.6rem;
  margin-bottom: 0.9rem;
  /* background-color: #e879f9; */

  & > h3 {
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #300224;
    /* transform: skewX(20deg); */
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: #444;
  letter-spacing: 0.75px;
  margin-bottom: 1.6rem;
`;

const ActionBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
  background-color: #101d28;

  color: white;
  width: 100%;
  /* transform: scale(1.2) translate(-8px, -4px); */
  padding: 0.8rem;
  justify-self: center;
  align-self: center;
  border-radius: 2px;

  @media (max-width: 59em) {
    transform: scale(1) translate(-8px, -4px);
  }

  @media (max-width: 45em) {
    grid-column: 1 / -1;
    grid-row: 3 / span 1;
  }
`;

const ViewLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  font-weight: 600;
  border-radius: 2px;
  padding: 0.2rem;

  &:hover {
    background-color: #d8d8d8;
    color: #121212;
  }
`;

const Link = styled.a`
  display: inline-block;
  color: #e8d7f7;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  transition: all 0.3s;

  &:hover {
    background-color: #d8d8d8;
    color: #121212;
  }
`;

export default function ProjectBox({ project }) {
  console.log(project);
  const { id, name, images, overview, liveLink, sourceCode } = project;
  return (
    <StyledProject>
      <Figure>
        <ImageBox>
          <img src={`/${images.cover}`} alt={name} />
        </ImageBox>

        <OverView>
          <FigCaption>
            <Name>
              <h3>{name}</h3>
            </Name>

            <Description>{overview}</Description>
          </FigCaption>
        </OverView>

        <ActionBox>
          <ViewLink>
            <Link href={liveLink} target="_blank">
              {"<"}LiveLink{"/>"}
            </Link>
          </ViewLink>

          <ViewLink>
            <Link href={sourceCode} target="_blank">
              {"<"}SourceCode{"/>"}
            </Link>
          </ViewLink>

          <ViewLink>
            <NavLink to={`/projects/${id}`}>
              {"<"}CaseStudy{"/>"}
            </NavLink>
          </ViewLink>
        </ActionBox>
      </Figure>
    </StyledProject>
  );
}

// Goal: Some of the Dom Manipulation techniques with DOM API ||  Tech: JavaScript, SCSS
// Effects: Navigation Fade animation, Tabbed components, carousel, modal, Accordion, smooth scrolling behavior

// 1) The Enterprise Inc.                     | Live Link | Github
// Goal: Chart your memorable restaurants around the world  ||  Tech: React, Redux
// Features:
// simple way to create accounts w/o any 3rd party solutions/backend with protected routes
// showing restaurants location, current location, seamlessly moving map location.
// filter and sort options for refine listings, easily shareable and bookmarkable.
// designed create, update or delete operations for their restaurant lists.

// 2) Fast React Pizza Co.              | Live Link | Github
// Goal: Order pizzas and get them delivered        ||  Tech: React JS, Redux, Tailwind
// Features:
// add multiple pizzas to a cart before ordering, update or delete an item from a cart.
// Integration of GPS position for easier delivery
// can mark their order priority and mark it even after order has been placed.
// Can look up their order
// Multiple Filter options for refined pizza menus including ingredients, price

// 4) Landing Page                             | Live Link | Github
// – A landing page design with complex layout techniques through modern css grid & flexbox and also added some animation. I used SCSS and BEM architecture to build this.

// 5)  LeetCode Account
