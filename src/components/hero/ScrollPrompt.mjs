import styled from "styled-components";
import { Button } from "../common/Button.mjs";
import { mdScreen } from "../../themes/theme.mjs";
import { MdArrowDownward } from "react-icons/md/index.js";
import { useEffect, useState } from "react";

export const ScrollPrompt = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 1;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <Wrapper>
      {isVisible && (
        <div className="scroll-prompt">
          <div className="btn-wrapper">
            <Button className="scroll-btn" onClick={props.onClick}>
              <MdArrowDownward style={arrowStyle} />
            </Button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const arrowStyle = { fontSize: "1.2em" };

const Wrapper = styled.div`
  height: 100%;
  position: relative;

  .scroll-btn {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  .btn-wrapper {
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

  @media (min-width: ${mdScreen}) {
    height: 140px;
    .btn-wrapper {
      margin-right: 0;
    }
  }
`;
