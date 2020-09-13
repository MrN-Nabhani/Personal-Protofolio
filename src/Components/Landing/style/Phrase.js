import styled from "styled-components";

const Phrase = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1rem;

  font-size: ${({ theme }) => theme.font.size.large};
  color: ${({ theme }) => theme.colors.primary};
  z-index: 5;
  @media only screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    top: 33%;
    left: 3rem;
  }
`;

export default Phrase;
