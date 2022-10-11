import styled from "styled-components";

export const BoxConnector = () => {
  return (
    <Wrapper>
      <div className="dotted-line" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40px;

  .dotted-line {
    height: 100%;
    width: 1px;
    margin-inline: auto;
    border-left: ${({ theme }) => theme.lightBorder};
  }
`;
