import styled from "styled-components";

const StyledDescription = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 2;
  display: flex;
  flex-direction: column;
  gap: 1.9rem;

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
  color: #444;
  font-weight: 400;
  /* text-align: justify; */

  &:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const Quote = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  /* background-color: orangered; */
  color: #444;
  font-weight: 600;
`;

export default function Description() {
  return (
    <StyledDescription>
      <Paragraph>
        Hi there! I'm Rajib, A Frontend Engineer who finds spark of excitement
        to design solutions with code BACKED UP BY TWO REAL ROCKS, SIMPLE AND
        USEFUL.
      </Paragraph>
      <Paragraph>
        Guided by teachers, thinkers, books, I'm grateful for their invaluable
        support that has enabled me to ZOOM ALL THE WAY IN AND OUT as an
        engineer and ceaselessly submerging into software engineering studies.
      </Paragraph>
      <Paragraph>
        As of now I'm deeply engaged in the JavaScript ocean. I've been learning
        by building meaningful web applications, theory prime concern, designing
        Apps with maintainability and expandability in mind.{" "}
        <span>
          This PROACTIVE APPROACH drives me towards right routes and always
          prompt me LEARNING NOT GOING TO STOP.
        </span>
      </Paragraph>

      <Quote>
        You can be a masterpiece and a work in progress simultaneously - Sophia
        Bush
      </Quote>
    </StyledDescription>
  );
}
