import styled from "styled-components";

export const NavButton = (props) => {
  return (
    <Wrapper className={props.className} onClick={props.onClick}>
      <p>{props.label}</p>
      {props.active && <div className="dotted-line" />}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  .dotted-line {
    width: 100%;
    height: 10px;
    border-bottom: ${({ theme }) => theme.darkBorder};
  }

  p {
    transition: 0s all;
  }

  border: none;
  background-color: transparent;
`;
