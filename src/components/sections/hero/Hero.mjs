import styled from "styled-components";
import Typewriter from "typewriter-effect";

import { Container } from "../../common/Container.mjs";
import { ScrollPrompt } from "./ScrollPrompt.mjs";
import { myFacts } from "../../../common/content.mjs";
import { mdScreen, lgScreen } from "../../../themes/theme.mjs";
import HeadShot from "../../../assets/head-shot.webp";

export const Hero = (props) => {
  return (
    <Wrapper>
      <Container className="hero">
        <div className="content">
          <div className="img-wrapper">
            <div className="dotted-line" />

            <img src={HeadShot} alt="" />
          </div>
          <h1 id="action-text">
            <Typewriter
              options={{
                strings: myFacts,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <ScrollPrompt onClick={props.scrollHandler} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;

  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    min-height: 630px;

    padding-top: ${({ theme }) => theme.navBarHeight};
  }

  .content {
    width: 100%;
    height: 75%;
    padding-block: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 35px;
  }

  .left-content {
    position: relative;
    background-color: red;
  }

  .img-wrapper {
    aspect-ratio: 9/13;
    height: 100%;
    max-width: 250px;
    position: relative;
    background-color: ${({ theme }) => theme.primaryColor};
    overflow: hidden;
    border: ${({ theme }) => theme.darkBorder};
    border-radius: 200px;
    filter: ${({ theme }) => theme.dropShadow};
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    border-radius: 200px;
  }

  #action-text {
    text-align: center;
    height: 85px;
  }

  .dotted-line {
    display: none;
    position: absolute;
    left: 50%;
    bottom: -50vh;
    height: 50vh;
    width: 1px;
    border-left: ${({ theme }) => theme.lightBorder};
    z-index: -1;
  }

  @media (min-width: ${mdScreen}) {
    .dotted-line {
      display: block;
    }
    .content {
      flex: 4;
      flex-direction: row;
      align-items: left;
      gap: 80px;
    }
    .img-wrapper {
      width: 30%;
      height: auto;
      max-width: 400px;
      overflow: visible;
    }
    #action-text {
      width: 100%;
      text-align: left;
      height: auto;
    }
  }

  @media (min-width: ${lgScreen}) {
    .content {
      gap: 100px;
    }
  }
`;
