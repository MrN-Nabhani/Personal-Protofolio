import styled from "styled-components";
import { Header, Paragraph } from "../../../../Shared/Typography";
import { FlexContainer } from "../../../../Shared/Wrappers";

export const ProjectWrapper = styled(FlexContainer)`
  margin: 5rem 0;
`;
export const ProjectDetails = styled.div`
  margin: auto;

  @media only screen and (min-width: ${({ theme }) =>
      theme.screen.tablet}) {
    width: 50%;
  }
`;
export const ProjectTitle = styled(Header)``;

export const ProjectDescribtion = styled(Paragraph)``;

export const ProjectImage = styled.img`
  display: inline-block;
  width: 400px;
  margin: auto;
  border-radius: 30px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.screen.tablet}) {
    width: 300px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.screen.desktop}) {
    width: 500px;
    height: 400px;
    
  }
`;
