import styled from "styled-components";
import { useState } from "react";
import { mdScreen } from "../../themes/theme.mjs";

export const ToggleSwitch = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    props.callBack();
  };

  return (
    <Wrapper className={props.className}>
      <span>Turn {checked ? "off" : "on"} the lights</span>

      <input
        className="input"
        checked={checked}
        type="checkbox"
        onChange={handleChange}
      />
      <div className="switch" />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  width: fit-content;
  margin-inline: auto;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  @media (min-width: ${mdScreen}) {
    flex-direction: row;
    margin-inline: 0;
  }
  .switch {
    position: relative;
    width: 50px;
    height: 23px;
    background: ${({ theme }) => theme.primaryColor};
    border: ${({ theme }) => theme.lightBorder};
    border-radius: 30px;
    padding: 4px;
    transition: 600ms all;

    &:before {
      transition: 250ms all;
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 35px;
      top: 50%;
      left: 0;
      background: ${({ theme }) => theme.secondaryColor};
      border: ${({ theme }) => theme.darkBorder};

      transform: translate(-2px, -50%);
    }
  }

  input {
    opacity: 0;
    position: absolute;

    &:checked + .switch {
      &:before {
        transform: translate(22px, -50%);
      }
    }
  }
`;
