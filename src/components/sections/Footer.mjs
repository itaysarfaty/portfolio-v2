import styled from "styled-components";
import { mdScreen } from "../../themes/theme.mjs";
import { Container } from "./../common/Container.mjs";
import { ToggleSwitch } from "./../common/ToggleSwitch.mjs";

export const Footer = (props) => {
  return (
    <Wrapper>
      <Container className="footer">
        <h3>Built with React.js</h3>
        <ToggleSwitch callBack={props.themeToggle} />

        <h3>© 2022 Itay Sarfaty</h3>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 30px;
    height: 140px;
    text-align: center;
  }

  .footer *:nth-child(1) {
    order: 2;
  }
  .footer *:nth-child(2) {
    order: 1;
  }
  .footer *:nth-child(3) {
    order: 3;
  }

  .footer > h3 {
    font-size: 14px;
    font-weight: 300;
  }

  @media (min-width: ${mdScreen}) {
    .footer {
      display: flex;
      flex-direction: row-reverse;
      gap: none;
      justify-content: space-between;
      margin-bottom: 0px;
    }
  }
`;
