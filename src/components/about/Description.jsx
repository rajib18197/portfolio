import styled from "styled-components";

const StyledDescription = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 2;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
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
  /* font-family: system-ui; */
  line-height: 1.9;
  hyphens: none;
  font-weight: 400;
  color: rgb(20, 23, 26);
  /* text-align: justify; */

  &:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
`;

export default function Description() {
  return (
    <StyledDescription>
      {/* I'm Rajib who have an immense love for building virtual
        brilliance with code BACKED UP BY TWO REAL ROCKS, SIMPLE AND USEFUL. */}
      {/* Through the direction of */}
      {/* for designing solutions */}
      <Paragraph>
        {/* BACKED UP by two things in mind [Rock means foundation] */}
        Hey!, I'm Rajib, A Frontend Engineer who finds spark of excitement to
        design solutions with code BACKED UP BY TWO REAL ROCKS, SIMPLE AND
        USEFUL.
      </Paragraph>
      <Paragraph>
        {/* and courses */}
        Guided by teachers, thinkers, books, I'm grateful for their invaluable
        support that has enabled me to ZOOM ALL THE WAY IN AND OUT as an
        engineer and ceaselessly submerging into software engineering studies.
      </Paragraph>
      <Paragraph>
        {/* As striving for 1000 tiny improvements, myself in
        software engineering studies.*/}
        {/* and its modern frameworks */}
        {/* practical implementation of tools */}
        {/* ceaselessly submerging myself in software engineering and mathematics and meticulously cultivating array of skills. */}
        {/* theory inline of course */}
        {/* that are not only useful but is also  */}
        {/* contribute to sustainable solutions /long-term / and easier to reason about */}
        As of now I'm deeply engaged in the JavaScript ocean. I've been learning
        by building meaningful web applications, theory prime concern, designing
        Apps with maintainability and expandability in mind.{" "}
        <span>
          This PROACTIVE APPROACH drives me on right routes and always prompt me
          LEARNING NOT GOING TO STOP.
        </span>
      </Paragraph>
      {/* <Paragraph>
        graduated from Bangladesh University of Business and Technology's
        Computer Science and Engineering program.
      </Paragraph> */}
      {/* Dive into my Curiosity stay helps me to always stay in the game of learning which builds an skill */}
    </StyledDescription>
  );
}

// The greatest gift is the ability to forget - to forget the bad things and focus on the good.
