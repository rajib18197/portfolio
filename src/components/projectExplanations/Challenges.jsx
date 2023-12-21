import styled from "styled-components";
import TitleBox from "../../ui/TitleBox";
import ChallengeBox from "./ChallengeBox";

const StyledChallenges = styled.div`
  /* outline: 2px solid #121212; */
  font-size: 1.8rem;
  left: 1.8;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* width: 90rem; */
`;

const ChallengesList = styled.div`
  display: grid;
  gap: 2rem;
`;

export default function Challenges({ challenges }) {
  return (
    <StyledChallenges>
      <TitleBox>On Immersion into Challenges</TitleBox>

      <ChallengesList>
        {challenges.map((challenge, i) => (
          <ChallengeBox challenge={challenge} key={i + 1} />
        ))}
      </ChallengesList>
    </StyledChallenges>
  );
}
