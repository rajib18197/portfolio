import styled from "styled-components";

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content auto max-content;
  gap: 3rem;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    gap: 5rem;
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 45em) {
    /* grid-template-columns: 1fr; */
    /* gap: 5rem; */
    width: 100%;
    /* margin: 0 auto; */
  }
`;

const Heading = styled.h1`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  font-family: "Megrim", sans-serif;
  font-size: 3rem;
  color: #462626;
  background-image: linear-gradient(to right, #f37d46, #ff8162);
  position: relative;
  word-spacing: 3px;
  width: max-content;
  padding: 0.4rem 0.8rem;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
    text-align: center;
    /* width: 50%;
    margin: 0 auto; */
  }
`;

const Description = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 2;
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  /* gap: 2rem; */

  @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 2 / span 1;
    /* width: 50%;
    margin: 0 auto; */
  }
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-family: system-ui;
  line-height: 1.6;
  hyphens: none;
  font-weight: 500;
  color: rgb(20, 23, 26);
  text-align: justify;
`;

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

const SkillIntro = styled(Paragraph)`
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
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

const Statement = styled.p`
  grid-column: 2 / -1;
  grid-row: 3 / span 2;
  background-color: orangered;
  padding: 1rem;
  border-radius: 4px;
`;

const Action = styled.div`
  padding-top: 3rem;
  display: grid;
  grid-row: 3 / -1;
  grid-template-columns: max-content max-content max-content max-content;
  grid-template-rows: min-content min-content min-content;
  justify-content: center;
  font-family: "Megrim", sans-serif;

  color: #444;
  font-size: 1.8rem;

  @media (max-width: 59em) {
    grid-column: 1 / -1;
    grid-row: 4 / span 1;
  }
`;

const Heading3 = styled.h5`
  padding: 0 0.4rem 0 1rem;
  padding: 0.6rem 0.6rem 0.6rem 1rem;

  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  background-color: white;
  font-size: 4rem;
  text-transform: uppercase;

  & span {
    vertical-align: top;
    display: inline-block;
    transform: translateY(-4px) scale(1.4, 1.9);
  }
`;

const Heading4 = styled.h5`
  padding: 0.1rem;
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  background-color: white;
`;

const Heading5 = styled.h5`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  background-color: white;
`;

const Heading6 = styled.h5`
  padding: 0.1rem;
  grid-column: 2 / -1;
  grid-row: 3 / span 1;
  background-color: white;
`;

export default function About() {
  return (
    <Layout>
      <Heading>Onboarding in Seconds.</Heading>

      <Description>
        <Paragraph>
          Hi there, I'm Rajib who have an immense love for building virtual
          brilliance with code BACKED UP BY TWO REAL ROCKS, SIMPLE AND USEFUL.
        </Paragraph>
        <Paragraph>
          Through the direction of teachers, thinkers, books and courses, I am
          grateful for the invaluable support that has enabled me to ZOOM ALL
          THE WAY IN AND OUT as a frontend developer and ceaselessly submerging
          myself in software engineering studies.
        </Paragraph>
        <Paragraph>
          As I deeply involved in the JavaScript world, I've been learning by
          building meaningfull web application that are not only useful but is
          also designed for long-term maintainability and easier to reason
          about. This PROACTIVE APPROACH contribute to sustainable solutions as
          well as reminds me that LEARNING NOT GOING TO STOP.
        </Paragraph>
        <Paragraph>
          I recently graduated from Bangladesh University of Business and
          Technology's Computer Science and Engineering program.
        </Paragraph>
      </Description>

      <Skill>
        <TitleBox>
          <span>Skills</span>
        </TitleBox>

        <SkillIntro>
          It took me lot of hours, sweating over the nuances and countless days
          of studying and practice of computer science and web development
          concepts for understanding what they do and what problems they solve
          to build something ecstatic.
        </SkillIntro>

        <ButtonContainer>
          <Button>JavaScript</Button>
          <Button>React JS</Button>
          <Button>Redux | RTK</Button>
          <Button>React Query</Button>
          <Button>Styled Components</Button>
          <Button>Tailwind CSS</Button>
          <Button>Algorithms</Button>
        </ButtonContainer>
      </Skill>

      <Action>
        <Heading3>
          <span>S</span>
        </Heading3>
        <Heading4>ounds great?</Heading4>
        <Heading5>I'M</Heading5>
        <Heading6>
          looking for a full time role where I can provide values.
        </Heading6>
      </Action>
    </Layout>
  );
}

// There's a gym saying that "the last 3-4 reps are the hardest, but make the muscle grow..."

// So much carryover to life.

// It's those areas of final push
//  - the hardest moments -
// That often bring the rewards you're looking for.

// If I went into your company, job or work, and asked you, "What's the *one thing* that would really level your performance up in this space?"
// Think about it. What would you say?

// Start doing that thing.

// Describe application state as plain objects and arrays.
// Describe changes in the system as plain objects.
// Describe the logic for handling changes as pure functions.

// If you're wondering what your life's work might be, ask yourself:

// 1. What's the biggest bottleneck in your day-to-day life?

// 2. What is a project that can help you solve it?

// This can take you places you could have never imagined.
// You are the market.

// Solve your problem and just make public how you solved it.

// And everything else will fall into place.
