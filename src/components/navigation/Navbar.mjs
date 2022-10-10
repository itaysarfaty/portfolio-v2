import styled from "styled-components";

import { Container } from "../common/Container.mjs";
import { NavButton } from "./NavButton.mjs";
import { Button } from "../common/Button.mjs";
import { mdScreen } from "../../themes/theme.mjs";

export const Navbar = ({ sectionState, scrollTo }) => {
  return (
    <Wrapper>
      <Container className="nav-bar">
        <div className="sections">
          <NavButton
            label="About"
            onClick={scrollTo.about}
            active={
              sectionState.about ||
              !(
                sectionState.about ||
                sectionState.projects ||
                sectionState.quote
              )
            }
          />
          <NavButton
            label="Projects"
            onClick={scrollTo.projects}
            active={sectionState.projects && !sectionState.quote}
          />
          <NavButton
            label="Quote"
            onClick={scrollTo.quote}
            active={sectionState.quote}
          />
        </div>
        <Button className="action-btn" label="Hire me" onClick={() => {}} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  display: grid;

  height: ${({ theme }) => theme.navBarHeight};
  width: 100vw;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-bottom: ${({ theme }) => theme.lightBorder};
  filter: ${({ theme }) => theme.dropShadow};
  z-index: 2;

  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sections {
    display: none;
    width: 40%;
    max-width: 400px;
    justify-content: space-between;
    gap: 10%;
  }

  .action-btn {
    max-width: 300px;
    margin-inline: auto;
    background-color: ${({ theme }) => theme.primaryColor};
  }

  @media (min-width: ${mdScreen}) {
    .sections {
      display: flex;
    }
    .action-btn {
      margin-right: 0;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;
