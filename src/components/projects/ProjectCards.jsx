import ProjectBox from "./ProjectBox";
import { getProjects } from "../../services/apiProjects";
import { useHttp } from "../../hooks/useHttp";
import { data } from "../../data/portfolio-data";

export default function ProjectCards() {
  // const { data: projects, isLoading, isError, error } = useHttp(getProjects);

  // if (isLoading) return <h1 style={{ color: "#121212" }}>Loading...</h1>;

  // if (!isLoading && isError) return <h2>{error.message}</h2>;
  const projects = data;

  console.log(projects);

  return (
    <>
      {projects.map((project) => (
        <ProjectBox key={project.name} project={project} />
      ))}
    </>
  );
}
