import styled from "styled-components";
import { Container } from "../common/Container.mjs";
import { Box } from "../common/Box.mjs";
import { Button } from "../common/Button.mjs";
import { SkillsSlider } from "./SkillsSlider.mjs";
import { Entry } from "../Education.mjs";

export const Skills = () => {
  return (
    <Wrapper>
      <Container>
        <Box className="box" title="Skills">
          <Entry className="slide-area">
            <SkillsSlider />
          </Entry>
          <div className="button-padding">
            <Button label="Request resume" onClick={() => {}}></Button>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 50px;
  width: 100%;
  .box {
    gap: 30px;
    position: relative;
  }
`;

// Secondary Components
