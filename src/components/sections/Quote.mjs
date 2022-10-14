import styled from "styled-components";
import { lgScreen } from "../../themes/theme.mjs";
import { Container } from "./../common/Container.mjs";
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
    height: calc(100vh - ${({ theme }) => theme.navBarHeight} - 160px);
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
    margin-bottom: 35px;
  }

  .text > h2 {
    font-size: 22px;
  }

  @media (min-width: ${lgScreen}) {
    .text {
      text-align: left;
      margin-left: 0;
      max-width: 700px;
    }
    .text > h1 {
      font-size: 40px;
      line-height: 60px;
    }

    .text > h2 {
      font-size: 23px;
    }
  }
`;
