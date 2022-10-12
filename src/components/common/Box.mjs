import styled from "styled-components";

export const Box = (props) => {
  return (
    <Wrapper className={props.className}>
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  height: fit-content;
  border: ${({ theme }) => theme.lightBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  gap: 35px;

  @media (min-width: ${({ theme }) => theme.smScreen}) {
    padding-inline: 10%;
    padding: 50px;
  }
`;
