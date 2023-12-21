import styled from "styled-components";

import Avatar from "../components/home/Avatar";
import Intro from "../components/home/Intro";
import SampleWork from "../components/home/SampleWork";
import Social from "../ui/Social";

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 35rem 1fr;
  grid-template-rows: 20rem 1fr;
  row-gap: 1rem;
  column-gap: 4rem;
  position: relative;

  // below 1248
  @media (max-width: 78em) {
    column-gap: 1rem;
  }

  @media (max-width: 59em) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40rem 1fr;
    row-gap: 10rem;
  }

  @media (max-width: 45em) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 50rem 1fr;
    row-gap: 5rem;
  }
`;

const SocialLink = styled.div`
  position: absolute;
  right: 2px;
  bottom: 50%;
  /* width: 100%; */
  /* height: 100%; */
  z-index: 100;
  transform: translate(0, -50%);
`;

export default function Home() {
  return (
    <Layout>
      <Avatar />
      <Intro />
      <SampleWork />
    </Layout>
  );
}
