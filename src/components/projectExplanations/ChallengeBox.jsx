import styled from "styled-components";

const StyledChallengeBox = styled.div`
  font-style: italic;
  color: #444;
  padding: 1rem;
  font-size: 1.7rem;
  border: 3rem solid white;
  border: 3rem solid #d5ebff;
  border-radius: 3px;
  line-height: 1.8;
  box-shadow: 0 2rem 5rem 1rem rgba(0, 0, 0, 0.1);
`;

export default function ChallengeBox({ challenge }) {
  return (
    <StyledChallengeBox>
      <span>
        {challenge.includes(".h.")
          ? challenge
              .split(".h.")
              .map((el, i) =>
                i === 0 ? <strong key={i + 1}>{el}:</strong> : el
              )
          : challenge}
      </span>
    </StyledChallengeBox>
  );
}
