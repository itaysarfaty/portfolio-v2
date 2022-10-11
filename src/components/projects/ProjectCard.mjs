import styled from "styled-components";
import { Button } from "../common/Button.mjs";
import { mdScreen, smScreen } from "../../themes/theme.mjs";
export const ProjectCard = (props) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="content">
          <div className="info">
            <h1>{props.title}</h1>
            <p>{props.type}</p>
          </div>
          <Button className="cta" label="Open" onClick={props.action} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    height: 100%;
    padding: 50px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .info {
    text-align: center;
  }

  .info > h1 {
    font-size: 24px;
    font-weight: 400;
  }

  .info > p {
    font-weight: 200;
  }

  .cta {
    margin-inline: auto;
  }

  @media (min-width: ${smScreen}) {
    .info > h1 {
      font-size: 28px;
    }
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
