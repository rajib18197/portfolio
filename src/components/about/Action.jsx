import styled from "styled-components";

const StyledAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Container = styled.div`
  padding-top: 3rem;
  display: grid;
  grid-row: 3 / -1;
  grid-template-columns: max-content max-content max-content max-content;
  grid-template-rows: min-content min-content min-content;
  justify-content: center;
  /* font-family: "Megrim", sans-serif; */

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
  background-color: #e4e4e4;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Lato", sans-serif;

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
  background-color: #e4e4e4;
  font-weight: 400;
`;

const Heading5 = styled.h5`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  background-color: #e4e4e4;
  font-weight: 400;
`;

const Heading6 = styled.h5`
  padding: 0.1rem;
  grid-column: 2 / -1;
  grid-row: 3 / span 1;
  background-color: #e4e4e4;
  font-weight: 400;
`;

const Contact = styled.div`
  color: #444;
  text-align: center;

  & a {
    font-weight: bold;
    text-decoration: underline;
    color: #3b3be4;
  }
`;

export default function Action() {
  return (
    <StyledAction>
      <Container>
        <Heading3>
          <span>S</span>
        </Heading3>
        <Heading4>ounds good?</Heading4>
        <Heading5>If</Heading5>
        <Heading6>
          you are looking for a developer, feel free to reach out.
        </Heading6>
      </Container>

      <Contact>
        <p>
          Email: <a href="mailto:rajib.rzb@gmail.com">rajib.rzb@gmail.com</a>
          {/* <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=rajib.rzb@gmail.com&tf=1"
            target="_blank"
          >
            rajib.rzb@gmail.com
          </a> */}
        </p>
      </Contact>
    </StyledAction>
  );
}

// The more you see it the more comfortable you feel
