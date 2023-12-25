import styled from "styled-components";

const Skill = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  background-color: #ecd8ff;
  box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.06);
  background-image: linear-gradient(to right bottom, #fbdb89, #ff837a);
  /* background-color: #fbdb89; */

  color: #f7b9b9;
  border-left: 4px solid #4e0c40;
  border-right: 4px solid #4e0c40;
  padding: 2rem;
  /* height: max-content; */
  /* width: max-content; */
  position: relative;

  @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 3 / span 1;
  }
`;

const TitleBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  transform: translate(-65%, 50%) rotate(15deg);
  transform: translate(-50%, 90%);
  z-index: 100;
  font-family: "Megrim", sans-serif;

  & span {
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #f8eded;
    background-color: #4e0c40;
    margin-bottom: 1rem;
    width: max-content;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 100px; */
    padding: 0.4rem 0.8rem;
    /* border-radius: 10rem; */
  }
`;

const SkillIntro = styled.p`
  margin-bottom: 3rem;
  font-size: 1.6rem;
  font-family: system-ui;
  line-height: 1.6;
  hyphens: none;
  font-weight: 400;
  color: rgb(20, 23, 26);
  text-align: justify;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  /* font-family: "Josefin Sans", sans-serif; */
  /* font-weight: 700; */
  /* width: max-content; */
  text-align: center;
  display: inline-block;
  padding: 1rem;
  background-color: rgba(245, 21, 152, 0.9);
  background-color: #f5f5f5;
  color: #362828;
  border-radius: 4px;
  /* border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%; */
`;

export default function Skills() {
  return (
    <Skill>
      <TitleBox>
        <span>Skills</span>
      </TitleBox>

      <SkillIntro>
        It took me lot of hours, sweating over the nuances and countless days of
        studying and practice of computer science and web development concepts
        for understanding what they do and what problems they solve to build
        something ecstatic.
      </SkillIntro>
      {/* Front-end development with React and modern libraries course */}
      {/* You want to truly master React development, including common libraries needed to build real-world apps: React Router, Redux, React Query, React Hooks Form, and many others */}

      <ButtonContainer>
        <Button>JavaScript</Button>
        <Button>React JS</Button>
        <Button>Redux(+ Toolkit & Toolkit query)</Button>
        <Button>React Query</Button>
        <Button>Styled Components</Button>
        <Button>Tailwind CSS</Button>
      </ButtonContainer>
    </Skill>
  );
}
