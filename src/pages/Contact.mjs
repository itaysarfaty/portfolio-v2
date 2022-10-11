import styled from "styled-components";

import { Box } from "../components/common/Box.mjs";
import { Button } from "../components/common/Button.mjs";

export const MessagePage = () => {
  return (
    <Wrapper>
      <Box title="I'm building a form">
        <p>In the mean time, email me!</p>
        <Button label="Itaysarfaty@gmail.com" />
      </Box>
      <Box>
        <Button label="Go back" />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
`;
