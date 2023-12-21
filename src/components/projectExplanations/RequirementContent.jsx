import styled from "styled-components";

import { HiArrowRight, HiCheckCircle } from "react-icons/hi2";

const StyledRequirementContent = styled.div`
  /* border-left: 3px solid #2c1e31; */
  hyphens: none;
  /* padding: 0 2rem; */
  background-color: #ebbefc;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > span:first-child {
    background-color: #3d104d;
    color: white;
    padding: 0 0.8rem;
    width: max-content;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem 1rem 1rem;

  & p {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 1rem;

    & svg {
      width: 2.4rem;
      height: 2.4rem;
      /* fill: orangered; */
      color: #943dff;
      transform: translateY(6px);
    }
  }
`;

const Nested = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > *:not(:first-child) {
    padding-left: 2rem;
  }

  & span svg {
    width: 2rem;
    height: 2rem;
    color: #581030;
    margin-right: 1rem;
  }
`;

export default function RequirementContent({ requirement }) {
  const { featureName, features } = requirement;

  return (
    <StyledRequirementContent>
      <span>{featureName}</span>
      <Features>
        {features.map((feature) => (
          <p key={feature}>
            <HiCheckCircle />
            <Nested>
              {feature.includes("i.")
                ? feature.split("i.").map((el, i) => (
                    <span key={i}>
                      {i === 0 ? (
                        el
                      ) : (
                        <>
                          <HiArrowRight /> {el}
                        </>
                      )}
                    </span>
                  ))
                : feature}
            </Nested>
          </p>
        ))}
      </Features>
      {/* 👉 */}
    </StyledRequirementContent>
  );
}
