import styled from "styled-components";
import { GoCheck } from "react-icons/go/index.js";

export const Skill = ({ label }) => {
  return (
    <Wrapper>
      <GoCheck style={style} />
      <p id="label">{label}</p>
    </Wrapper>
  );
};
const style = { fontSize: "1.2em", marginRight: "20px" };

const Wrapper = styled.div`
  width: fit-content;
  color: ${({ theme }) => theme.tertiaryColor};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
