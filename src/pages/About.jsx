import styled from "styled-components";
import Action from "../components/about/Action";
import Description from "../components/about/Description";
import Heading from "../components/about/Heading";
import Skills from "../components/about/Skills";

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  grid-template-rows: min-content min-content auto max-content;
  gap: 3rem;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    gap: 5rem;
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 45em) {
    width: 100%;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Heading>Onboarding in Seconds!</Heading>
      <Description />
      <Skills />
      <Action />
    </Layout>
  );
}
