import styled from "styled-components";
import { Container } from "./common/Container.mjs";
import { Box } from "./common/Box.mjs";
import { Button } from "./common/Button.mjs";
import { mdScreen } from "../themes/theme.mjs";
import { openLink } from "../Utils.js";
export const Socials = () => {
  return (
    <Wrapper>
      <Container>
        <Box className="socials">
          <Button
            label="Linked In"
            onClick={() => openLink("https://www.linkedin.com/in/itaysarfaty/")}
          ></Button>
          <Button
            label="Github"
            onClick={() => openLink("https://github.com/itaysarfaty")}
          ></Button>
          <Button
            label="Behance"
            onClick={() => openLink("https://www.behance.net/itaysarfaty")}
          ></Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-block: 50px;
  .socials {
    align-items: center;
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
