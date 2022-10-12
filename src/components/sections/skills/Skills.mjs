import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Container } from "../../common/Container.mjs";
import { Box } from "../../common/Box.mjs";
import { Button } from "../../common/Button.mjs";
import { SkillsSlider } from "./SkillsSlider.mjs";
import { Entry } from "../Education.mjs";

export const Skills = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Box title="Skills">
          <Entry>
            <SkillsSlider />
          </Entry>
          <div className="btn-wrapper">
            <Button
              label="Request resume"
              onClick={() => navigate("/contact")}
            ></Button>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 50px;
  width: 100%;

  .btn-wrapper {
    width: 100%;
  }
`;

// Secondary Components
