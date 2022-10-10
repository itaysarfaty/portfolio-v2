import styled from "styled-components";
import { smScreen } from "../../themes/theme.mjs";

export const Button = (props) => {
  return (
    <Wrapper className={props.className} onClick={props.onClick}>
      {props.label}
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: ${({ theme }) => theme.darkBorder};
  background-color: ${({ theme }) => theme.secondaryColor};
  height: 60px;
  border-radius: 100px;
  width: 100%;
  cursor: pointer;

  filter: ${({ theme }) => theme.dropShadow};

  @media (hover: hover) {
    :hover {
      transform: scale(0.97);
      filter: drop-shadow(none);
    }
  }

  @media (min-width: ${smScreen}) {
    max-width: 300px;
  }
`;
