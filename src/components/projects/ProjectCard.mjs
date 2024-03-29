import styled from "styled-components";
import { Button } from "../common/Button.mjs";
import { mdScreen, smScreen } from "../../themes/theme.mjs";
export const ProjectCard = (props) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="content">
          <div className="content-info">
            <h1>{props.title}</h1>
            <Tags tags={props.tags} />
          </div>
          <Button
            className="cta"
            label="Open"
            onClick={props.action}
            disabled={props.action === null}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Tags = (props) => {
  const numDividers = props.tags.length - 1;
  return (
    <div className="tags-wrapper">
      <div className="tags-content">
        {props.tags.map((tag, i) => {
          return (
            <div className="tag" key={i}>
              <p>{tag}</p>
              {i < numDividers && <div className="divider" />}
            </div>
          );
        })}
      </div>
    </div>
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

  .content-info {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    gap: 15px;
  }

  .content-info > h1 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 0px;
  }

  .content-info > p {
    font-weight: 200;
  }

  .cta {
    margin-inline: auto;
  }

  .tags-wrapper {
    border-bottom: ${({ theme }) => theme.lightBorder};
    width: fit-content;
  }
  .tags-content {
    display: flex;
  }
  .tag {
    display: flex;
    align-items: center;
  }
  .tag > p {
    font-size: 12px;
    flex-shrink: 0;
  }
  .divider {
    width: 0.2px;
    height: 50%;
    background-color: ${({ theme }) => theme.tertiaryColor};
    margin-inline: 20px;
    opacity: 0.2;
  }

  @media (min-width: ${smScreen}) {
    .content-info > h1 {
      font-size: 28px;
    }
  }

  @media (min-width: ${mdScreen}) {
    .tag > p {
      font-size: 14px;
    }
    .tags-wrapper {
      padding-block: 2px;
    }

    .content {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .cta {
      margin-inline: 0;
    }
    .content-info {
      gap: 10px;
      align-items: flex-start;
    }
  }
`;
