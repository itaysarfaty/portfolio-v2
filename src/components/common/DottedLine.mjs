import styled from "styled-components";

export const DottedLine = (props) => <Wrapper className={props.className} />;

const Wrapper = styled.div`
  width: ${({ direction, width }) => (direction === "up" ? "1px" : width)};
  height: ${({ direction, height }) => (direction === "up" ? height : "1px")};
  border-left: ${({ direction, theme, light }) => {
    if (direction !== "up") return light ? theme.lightBorder : theme.darkBorder;
  }};
  border-top: ${({ direction, theme, light }) => {
    if (direction === "up") return light ? theme.lightBorder : theme.darkBorder;
  }}; ;
`;
