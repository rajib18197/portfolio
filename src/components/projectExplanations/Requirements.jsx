import styled from "styled-components";
import TitleBox from "../../ui/TitleBox";
import RequirementContent from "./RequirementContent";

const StyledRequirements = styled.div`
  list-style: none;
  font-size: 1.7rem;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Requirements({ requirements }) {
  return (
    <StyledRequirements>
      <TitleBox>Project Requirements</TitleBox>
      <Box>
        {requirements.map((requirement) => (
          <RequirementContent
            key={requirement?.featureName || requirement}
            requirement={requirement}
          />
        ))}
      </Box>
    </StyledRequirements>
  );
}
