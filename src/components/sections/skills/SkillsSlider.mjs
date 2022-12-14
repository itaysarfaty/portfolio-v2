import styled from "styled-components";

import { mdScreen, smScreen } from "../../../themes/theme.mjs";
import { Skill } from "./Skill.mjs";
import { mySkills } from "../../../common/content.mjs";

export const SkillsSlider = () => {
  return (
    <Wrapper>
      <div className="skills-list">
        {mySkills.map((skill, i) => (
          <Skill label={skill} key={i} />
        ))}
      </div>
      <div className="skills-list delay">
        {mySkills.map((skill, i) => (
          <Skill label={skill} key={i} />
        ))}
      </div>
      <div className="gradient"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 25px;
  overflow: hidden;
  position: relative;
  display: grid;
  align-items: center;

  --animation-speed: ${2.7 * mySkills.length + "s"};
  --animation-delay: calc(var(--animation-speed) / 2);
  --skill-list-width: ${170 * mySkills.length + "px"};

  .skills-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    flex-shrink: 0;
    width: var(--skill-list-width);
    animation: slide-small var(--animation-speed) linear infinite;
  }

  .skills-list.delay {
    transform: translateX(50%);
    animation-delay: var(--animation-delay);
  }

  /* @media (hover: hover) {
    :hover .skills-list {
      animation-play-state: paused;
    }
  } */

  .gradient {
    display: none;
    --gradient-color: ${({ theme }) => theme.secondaryColor};
    background: linear-gradient(
      to right,
      var(--gradient-color) 10%,
      ${({ theme }) => theme.secondaryColor + "00"} 40%,
      ${({ theme }) => theme.secondaryColor + "00"} 60%,
      var(--gradient-color) 90%
    );
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${smScreen}) {
    height: 40px;

    .gradient {
      display: block;
    }
  }

  @media (min-width: ${mdScreen}) {
    .skills-list {
      animation: slide var(--animation-speed) linear infinite;
    }
  }

  @keyframes slide {
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(-150%);
    }
  }

  @keyframes slide-small {
    from {
      transform: translateX(15%);
    }
    to {
      transform: translateX(-185%);
    }
  }
`;
