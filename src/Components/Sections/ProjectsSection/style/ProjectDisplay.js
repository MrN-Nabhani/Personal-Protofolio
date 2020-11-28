import styled from "styled-components";
import { Header, Paragraph } from "../../../../Shared/Typography";

export const ProjectWrapper = styled.div`
  margin: 5rem auto;
`;

export const ProjectDetails = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    width: 50%;
  }
`;

export const ProjectTitle = styled(Header)`
	width: 350px;
`;

export const ProjectDescribtion = styled(Paragraph)``;

export const ProjectViewButton = styled.a.attrs((props) => ({
  href: props.url,
  target: "_blank",
}))`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-family: inherit;
  padding: 1rem 2rem;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`;

export const ProjectImage = styled.img.attrs(() => ({
  loading: "lazy",
}))`
  display: inline-block;
  width: 	300px;
	height: 300px;
  margin: auto;
  border-radius: 30px;
  border-bottom: 6px outset;
  object-fit: cover;
  object-position: center top;

  @media only screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    /* width: 300px; */
  }

  @media only screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    /* width: 400px; */
    /* height: 400px; */
  }
`;
