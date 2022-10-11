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
            label="Motto"
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
`;
