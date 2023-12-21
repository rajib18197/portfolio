import styled from "styled-components";

const Skill = styled.span`
  background-color: #dd2476;
  color: #fffbfb;
  padding: 0.4rem 0.8rem;
`;

const Box = styled.span`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  line-height: normal;
  background-color: #270252;
  background-image: linear-gradient(
    45deg,
    rgb(115, 43, 247) 0%,
    rgb(125, 48, 248) 13%
  );
  color: white;
  border-radius: 50%;
`;

export default function TechSkill({ skill, index }) {
  return (
    <li>
      <Box>{index + 1}</Box>
      <span>
        {skill.includes(".@")
          ? skill
              .split(".@")
              .map((text, i) =>
                i === 0 ? <Skill key={i}>{text}</Skill> : text
              )
          : skill}
      </span>
    </li>
  );
}
