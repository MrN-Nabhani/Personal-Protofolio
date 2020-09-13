import styled from "styled-components";

const MenuBtn = styled.button`
  display: block;
  padding: 0 0.5rem;

  transform: rotate(90deg);

  font-size: 15pt;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  
  background: transparent;
  color: inherit;
  border: none;

  cursor: pointer;
  
  @media only screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    display: none;
  }
`;

export default MenuBtn;
