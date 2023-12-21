import styled from "styled-components";

const Text = styled.p`
  padding: 1rem;
  /* background-color: #220842;
  background-image: linear-gradient(
    45deg,
    rgb(115, 43, 247) 0%,
    rgb(125, 48, 248) 13%
  ); */
  /* background-image: linear-gradient(
    45deg,
    rgba(114, 43, 247, 0.74) 0%,
    rgba(125, 48, 248, 0.555) 13%
  ); */
  color: #ffe57f;
  color: #24221f;
  font-size: 1.7rem;
  /* font-weight: 500; */
  line-height: 1.9;
  /* box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.15); */
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.06);
  border-left: 4px solid rgb(115, 43, 247);
`;

export default function ThoughtBox({ thought }) {
  return (
    <>
      <Text>{thought}</Text>
    </>
  );
}
