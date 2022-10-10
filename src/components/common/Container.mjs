import styled from "styled-components";

export const Container = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

const Wrapper = styled.div`
  width: min(
    100% - ${({ theme }) => theme.ctrPadding},
    ${({ theme }) => theme.ctrWidth}
  );
  margin-inline: auto;
`;
