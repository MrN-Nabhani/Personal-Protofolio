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

export const ProjectImage = styled.img.attrs(props => ({
  loading: 'lazy'
}))`
  display: inline-block;
  width: 300px;
  margin: auto;
  border-radius: 30px;
  border-bottom: 6px outset; 
  object-fit: cover;
  object-position: center top;

  @media only screen and (min-width: ${({ theme }) =>
      theme.screen.tablet}) {
    width: 300px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.screen.desktop}) {
    width:  400px;
    height: 400px;
    
  }
`;
