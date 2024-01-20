import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  font-size: 1.9rem;
  font-weight: 400;
  color: rgb(20, 27, 44);
  /* letter-spacing: 0.5px; */
  text-align: justify;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* border: 2px dashed orangered;
  padding: 1rem; */

  & :first-child {
    background: linear-gradient(90deg, #ff7170 -50.34%, #ffe57f 100.78%);
    background: #ff512f; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f70672,
      #fd4925
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #dd2476,
      #ff512f
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-clip: text;
    color: transparent;
    font-weight: 600;
  }
`;

export default function Description({ descriptions }) {
  return (
    <StyledDescription>
      {descriptions.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </StyledDescription>
  );
}
