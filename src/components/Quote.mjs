import styled from "styled-components";
import { lgScreen } from "../themes/theme.mjs";
import { Container } from "./common/Container.mjs";
export const Quote = () => {
  return (
    <Wrapper>
      <Container className="hero">
        <div className="text">
          <h1>
            Everything should be made as simple as possible, but not simpler.
          </h1>
          <h2>Albert Einstein</h2>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero {
    height: calc(100vh - ${({ theme }) => theme.navBarHeight} - 200px);
    display: flex;
    align-items: center;
    min-height: 400px;
  }

  .text {
    text-align: center;
    height: fit-content;
    width: 95%;
    margin-inline: auto;
  }

  .text > h1 {
    font-size: 34px;
    line-height: 50px;
    margin-bottom: 68px;
  }

  .text > h2 {
    font-size: 23px;
  }

  @media (min-width: ${lgScreen}) {
    .text {
      text-align: left;
      margin-left: 0;
      max-width: 935px;
    }
    .text > h1 {
      font-size: 55px;
      line-height: 100px;
      margin-bottom: 50px;
    }

    .text > h2 {
      font-size: 36px;
    }
  }
`;
