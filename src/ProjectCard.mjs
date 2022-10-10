import styled from "styled-components";
import { Box } from "./components/common/Box.mjs";
import { Button } from "./components/common/Button.mjs";
import { mdScreen } from "./themes/theme.mjs";

export const ProjectCard = (props) => {
  return (
    <Wrapper>
      <Box className="card">
        <div className="content">
          <div className="info">
            <h1>J Portal</h1>
            <p>Relational Database Design</p>
          </div>
          <Button className="cta" label="View project" />
        </div>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .card {
    height: 100%;
    border: ${({ theme }) => theme.lightBorder};
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .info {
    text-align: center;
  }

  .cta {
    margin-inline: auto;
  }

  @media (min-width: ${mdScreen}) {
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .info {
      text-align: left;
    }
    .cta {
      margin-inline: 0;
    }
  }
`;
