import styled from "styled-components";
import { Container } from "../common/Container.mjs";
import { Box } from "../common/Box.mjs";
import { Button } from "../common/Button.mjs";
import { Skill } from "./Skill.mjs";
import { smScreen } from "../../themes/theme.mjs";

export const Skills = () => {
  return (
    <Wrapper>
      <Container className="skills">
        <Box className="box skills-box" dark={true}>
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
        </Box>
        <div className="gap">
          <div className="dotted-line" />
        </div>

        <Box className="box cta">
          <h1>More details</h1>
          <Button label="Request resume" onClick={() => {}}></Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 50px;
  height: fit-content;

  .dotted-line {
    height: 100%;
    width: 1px;
    margin-inline: auto;
    border-left: ${({ theme }) => theme.lightBorder};
    z-index: -1;
  }

  .gap {
    width: 100%;
    height: 50px;
    z-index: 1;
    background-color: ${({ theme }) => theme.primaryColor};
  }
  .gradient {
    display: none;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.secondaryColor} 10%,
      ${({ theme }) => theme.secondaryColor + "00"} 40%,
      ${({ theme }) => theme.secondaryColor + "00"} 60%,
      ${({ theme }) => theme.secondaryColor} 90%
    );
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  .skills {
    display: flex;
    flex-direction: column;
  }

  .box {
    height: 300px;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .skills-box {
    background-color: ${({ theme }) => theme.secondaryColor};

    border: ${({ theme }) => theme.darkBorder};

    overflow: hidden;
    position: relative;
    --animation-speed: 25s;
    --animation-delay: calc(var(--animation-speed) / 2);
  }

  .skills-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-shrink: 0;
    width: 1600px;
    position: absolute;
    animation-name: slide;
    animation-duration: var(--animation-speed);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .skills-list.delay {
    transform: translateX(100%);
    animation-name: slide;
    animation-delay: var(--animation-delay);
  }

  /* .skills-box:hover .skills-list {
    animation-play-state: paused;
  } */

  @media (min-width: ${smScreen}) {
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

// Secondary Components
