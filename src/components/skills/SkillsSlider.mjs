import styled from "styled-components";
import { smScreen } from "../../themes/theme.mjs";
import { Skill } from "./Skill.mjs";

export const SkillsSlider = () => {
  return (
    <Wrapper>
      <div className="skills-list">
        <Skill label="Java Script" />
        <Skill label="Python" />
        <Skill label="Node.js" />
        <Skill label="Docker" />
        <Skill label="Express.js" />
        <Skill label="React.js" />
        <Skill label="UI/UX" />
        <Skill label="Adobe XD" />
      </div>
      <div className="skills-list delay">
        <Skill label="Java Script" />
        <Skill label="Python" />
        <Skill label="Node.js" />
        <Skill label="Docker" />
        <Skill label="Express.js" />
        <Skill label="React.js" />
        <Skill label="UI/UX" />
        <Skill label="Adobe XD" />
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

  --animation-speed: 25s;
  --animation-delay: calc(var(--animation-speed) / 2);

  .skills-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    flex-shrink: 0;
    width: 1600px;
    animation: slide var(--animation-speed) linear infinite;
  }

  .skills-list.delay {
    transform: translateX(100%);
    animation-name: slide;
    animation-delay: var(--animation-delay);
  }

  /* .skills-box:hover .skills-list {
    animation-play-state: paused;
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

  @keyframes slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
