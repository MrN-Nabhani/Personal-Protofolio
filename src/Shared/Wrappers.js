import styled from "styled-components";

export const FlexContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.screen.largeDevice}) {
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;
