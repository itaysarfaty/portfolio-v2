import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Container } from "../../common/Container.mjs";
import { NavButton } from "./NavButton.mjs";
import { Button } from "../../common/Button.mjs";
import { mdScreen } from "../../../themes/theme.mjs";

export const Navbar = ({ sectionState, scrollTo }) => {
  const navigate = useNavigate();
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
        <div className="btn-wrapper">
          <Button
            className="action-btn"
            label="Contact"
            onClick={() => navigate("/contact", { replace: false })}
          />
        </div>
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

  .btn-wrapper {
    width: 100%;
    max-width: 300px;
    margin-inline: auto;
  }

  .action-btn {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  @media (min-width: ${mdScreen}) {
    .sections {
      display: flex;
    }
    .btn-wrapper {
      margin-right: 0;
    }
  }
`;
