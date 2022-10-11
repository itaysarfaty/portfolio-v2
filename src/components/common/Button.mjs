import styled from "styled-components";
import { smScreen } from "../../themes/theme.mjs";

export const Button = (props) => {
  return (
    <Wrapper className={props.className} onClick={props.onClick}>
      {props.children}
      {props.label}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: ${({ theme }) => theme.darkBorder};
  background-color: ${({ theme }) => theme.secondaryColor};
  height: 60px;
  border-radius: 100px;
  width: 100%;
  transition: 0s;

  filter: ${({ theme }) => theme.dropShadow};

  @media (hover: hover) {
    :hover {
      border: ${({ theme }) => theme.lightBorder};
    }
  }

  @media (min-width: ${smScreen}) {
    max-width: 300px;
  }
`;
