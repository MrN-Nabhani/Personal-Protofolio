import styled from "styled-components";

const TextWrapper = styled.div`
  padding: 0rem 1.5rem;
  text-align: ${({textAlign}) => textAlign || 'center'};
  /* change responsive acts here */
`;

export const Header = styled.header`
  font-size: ${({ theme }) => theme.font.size.mega};
  color: ${({primary, theme})=> primary && theme.colors.primary || theme.colors.secondary};
  font-weight: bolder;
  
  /* -webkit-text-stroke: 2px black; */
`;

export const Title = styled.h3`
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;
export const Subtext = styled.small`
  /* background-color: ${({ theme }) => theme.colors.primary}; */
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({fontColor})=> fontColor || 'black'};
  margin: 1rem;
`;

export const Hilighted = styled.mark`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`;

export default TextWrapper;
