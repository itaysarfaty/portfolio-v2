import styled from "styled-components";
import { Container } from "./common/Container.mjs";
import { Box } from "./common/Box.mjs";
import { smScreen } from "../themes/theme.mjs";

export const Education = (props) => {
  return (
    <Wrapper ref={props.setRef}>
      <Container>
        <Box title="Education">
          <Entry
            textStyle="restrict"
            text="State University of New York Binghamton University ’22"
          />
          <Entry
            textStyle="restrict"
            text="Watson College of Engineering & Applied Sciences"
          />
          <Entry text="B.S. Computer Science" />
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .restrict {
    margin-inline: auto;
    width: 70%;
  }

  @media (min-width: ${smScreen}) {
    .restrict {
      width: 80%;
    }
    .container {
      padding-inline: 5%;
    }
  }
`;

// Sub Component
// --------------------------------------------

export const Entry = ({ text, textStyle, children }) => {
  return (
    <StyledEntry>
      <p className={textStyle}>
        {text}
        {children}
      </p>
    </StyledEntry>
  );
};

const StyledEntry = styled.section`
  padding-block: 25px;
  display: grid;
  align-items: center;

  background-color: ${({ theme }) => theme.secondaryColor};
  border: ${({ theme }) => theme.darkBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  filter: ${({ theme }) => theme.dropShadow};
`;
