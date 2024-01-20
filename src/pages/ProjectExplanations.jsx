import { useParams } from "react-router-dom";
import Article from "../components/projectExplanations/Article";
import ProjectName from "../components/projectExplanations/ProjectName";
import { useEffect, useRef } from "react";
import { useHttp } from "../hooks/useHttp";
import { getProject, getProjects } from "../services/apiProjects";
import Social from "../ui/Social";
import styled from "styled-components";
import ProjectBox from "../components/projects/ProjectBox";
import Heading from "../components/about/Heading";
import { FaHeart } from "react-icons/fa";
import { data } from "../data/portfolio-data";

const Link = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: min-content 1fr;
  row-gap: 3rem;
  column-gap: 2rem;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr 1fr 1fr 1fr;
  }
`;

const Other = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Greeting = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #101d28;
  color: white;
  width: max-content;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;

  & svg {
    width: 2rem;
    height: 2rem;
    fill: orangered;
  }
`;

export default function ProjectExplantions() {
  const { id } = useParams();
  console.log(id);

  const project = data.find((project) => Number(project.id) === Number(id));
  const otherProjects = data.filter(
    (project) => Number(project.id) !== Number(id)
  );

  console.log(project);
  console.log(otherProjects);

  const ref = useRef();

  useEffect(
    function () {
      if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
    },
    [id]
  );

  return (
    <div ref={ref}>
      <ProjectName name={project.name} />
      <Article article={project} />

      <Other>
        <Heading>Other Projects</Heading>
        <Link>
          {otherProjects.map((project) => {
            if (Number(project.id) === Number(id)) return null;
            return <ProjectBox key={project.name} project={project} />;
          })}
        </Link>
        <Greeting>
          <FaHeart /> Thank You So much for reading <FaHeart />
        </Greeting>
      </Other>
    </div>
  );
}

// 1st Draft

// const {
//   data: [project = {}] = [],
//   isLoading,
//   isError,
//   error,
// } = useHttp(getProject, id);

// console.log(project);

// const {
//   data: otherProjects,
//   isLoading: isOtherLoading,
//   isError: isOtherError,
// } = useHttp(getProjects);

// if (isLoading) return <h1>Loading</h1>;

// if (!isLoading && isError) return <h2>{error.message}</h2>;

// console.log(projects);

// if (isLoading || isOtherLoading) return <h1>Loading</h1>;

// if (!isLoading && isError) return <h2>{error.message}</h2>;

// if (Object.keys(project).length === 0) return <h2>Loading</h2>;
