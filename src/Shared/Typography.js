import styled from "styled-components";

const TextWrapper = styled.div`
  padding: 0rem 2rem;
  text-align: center;
  /* change responsive acts here */
`;

export const Header = styled.header`
  font-size: ${({ theme }) => theme.font.size.mega};
  color: ${({ theme }) => theme.colors.secondary};
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
  margin: 1rem;
`;

export const Hilighted = styled.mark`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default TextWrapper;
