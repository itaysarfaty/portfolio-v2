import styled from "styled-components";
import { Button } from "../common/Button.mjs";
import { mdScreen } from "../../themes/theme.mjs";

export const ScrollPrompt = () => {
  return (
    <Wrapper>
      <div className="scroll-prompt">
        <div className="action">
          <Button label="Scroll down" />
        </div>
        <div className="scroll-line" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  position: relative;

  .scroll-prompt {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin-inline: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    height: 100%;
    margin-inline: auto;
  }

  .action {
    width: 100%;
    height: min-content;
  }

  .scroll-line {
    height: 100%;
    border-right: ${({ theme }) => theme.lightBorder};
  }

  @media (min-width: ${mdScreen}) {
    height: 140px;
    .scroll-prompt {
      margin-right: 0;
    }
  }
`;
