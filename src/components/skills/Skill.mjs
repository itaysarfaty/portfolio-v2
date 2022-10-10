import styled from "styled-components";
import { ImCheckmark } from "react-icons/im/index.js";

export const Skill = ({ label }) => {
  return (
    <Wrapper>
      <ImCheckmark style={style} />
      <p id="label">{label}</p>
    </Wrapper>
  );
};
const style = { fontSize: "1.3em", marginRight: "20px" };

const Wrapper = styled.div`
  width: fit-content;
  color: ${({ theme }) => theme.tertiaryColor};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
