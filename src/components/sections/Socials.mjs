import styled from "styled-components";
import { Container } from "./../common/Container.mjs";
import { Box } from "./../common/Box.mjs";
import { Button } from "./../common/Button.mjs";
import { mdScreen } from "../../themes/theme.mjs";
import { openLink } from "../../common/utils.js";
import { SiBehance } from "react-icons/si/index.js";
import { VscGithub } from "react-icons/vsc/index.js";
import { GrLinkedinOption } from "react-icons/gr/index.js";

export const Socials = () => {
  return (
    <Wrapper>
      <Container>
        <Box className="socials">
          <Button
            className="btn"
            label="LinkedIn"
            onClick={() => openLink("https://www.linkedin.com/in/itaysarfaty/")}
          >
            <GrLinkedinOption style={arrowStyle} />
          </Button>
          <Button
            className="btn"
            label="Github"
            onClick={() => openLink("https://github.com/itaysarfaty")}
          >
            <VscGithub style={arrowStyle} />
          </Button>
          <Button
            className="btn"
            label="Behance"
            onClick={() => openLink("https://www.behance.net/itaysarfaty")}
          >
            <SiBehance style={arrowStyle} />
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};
const arrowStyle = { fontSize: "1.3em" };

const Wrapper = styled.section`
  padding-top: 50px;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
  }
  .socials {
    align-items: center;
    padding: 50px;
    gap: 30px;
  }
  @media (min-width: ${mdScreen}) {
    .socials {
      flex-direction: row;
      justify-content: space-between;
      gap: 50px;
    }
  }
`;
