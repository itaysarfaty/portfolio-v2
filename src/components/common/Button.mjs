import styled from "styled-components";
import { smScreen } from "../../themes/theme.mjs";

export const Button = (props) => {
  return (
    <Wrapper
      ref={props.setRef}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
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
  transition: opacity 250ms;

  filter: ${({ theme }) => theme.dropShadow};

  :disabled,
  [disabled] {
    opacity: 0.4;
    pointer-events: none;
  }

  @media (hover: hover) {
    :hover {
      border: ${({ theme }) => theme.lightBorder};
    }
  }

  @media (min-width: ${smScreen}) {
    max-width: 300px;
  }
`;
