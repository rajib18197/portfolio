import styled from "styled-components";
import Header from "../components/projects/Header";
import ProjectCards from "../components/projects/ProjectCards";

const Layout = styled.section`
  height: 100%;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: min-content 1fr 1fr;
  row-gap: 3rem;
  column-gap: 2rem;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr 1fr 1fr 1fr;
    /* height: auto; */
  }
`;

export default function Projects() {
  return (
    <Layout>
      <Header />
      <ProjectCards />
    </Layout>
  );
}
