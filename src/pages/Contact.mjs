import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Box } from "../components/common/Box.mjs";
import { Button } from "../components/common/Button.mjs";
import { Container } from "../components/common/Container.mjs";
import { useState } from "react";

export const ContactPage = () => {
  const navigate = useNavigate();
  const [copyState, setCopyState] = useState(false);
  const myEmail = "itaysarfaty@gmail.com";

  const handleCopy = () => {
    setCopyState(true);

    setTimeout(() => {
      navigator.clipboard.writeText(myEmail);
      setCopyState(false);
    }, 4000);
  };
  return (
    <Wrapper>
      <Container className="message-page">
        <Box title="Email me">
          <p>{copyState ? "Copied!" : "Press to copy"}</p>
          <Button className="big-btn" label={myEmail} onClick={handleCopy} />
          <Button className="small-btn" label="Email" onClick={handleCopy} />
        </Box>
        <Box>
          <Button
            label="Cancel"
            onClick={() => navigate("/", { replace: true })}
          />
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  .message-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
  }

  .small-btn {
    display: none;
  }
  .big-btn {
    display: block;
  }

  @media (max-width: 375px) {
    .small-btn {
      display: block;
    }
    .big-btn {
      display: none;
    }
  }
`;
