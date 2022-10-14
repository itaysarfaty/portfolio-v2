import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Box } from "../components/common/Box.mjs";
import { Button } from "../components/common/Button.mjs";
import { Container } from "../components/common/Container.mjs";
import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize.mjs";

export const ContactPage = () => {
  const navigate = useNavigate();
  const [copyState, setCopyState] = useState(false);
  const myEmail = "itaysarfaty@gmail.com";
  const size = useWindowSize();

  const handleCopy = () => {
    setCopyState(true);
    setTimeout(() => {
      navigator.clipboard.writeText(myEmail);
      setCopyState(false);
    }, 4000);
  };

  return (
    <Wrapper>
      <Container className="contact-page">
        <Box className="contact-info" title="Email me">
          <Button
            className="email-btn"
            label={size.width >= 375 ? myEmail : "Email"}
            onClick={handleCopy}
            disabled={copyState}
          />
          <p>{copyState ? "Copied" : "Press to copy"}</p>
        </Box>
        <Box>
          <Button label="Back" onClick={() => navigate("/")} />
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  .contact-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
  }
  .contact-info {
    gap: 10px;
  }

  .contact-info > p {
    font-size: 14px;
  }

  .email-btn {
    margin-top: 30px;
  }
`;
