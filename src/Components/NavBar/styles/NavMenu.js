import styled, { css } from "styled-components";

const NavMenu = styled.div`
  position: fixed;
  padding: 0.5rem 0.5rem;
  
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.5s;
  
  box-shadow: 1px 1px 6px #000; //? consider removing it if the body wasn't white
  
  z-index: 10000;

  ${({ attached }) =>
    attached &&
    css`
      background-color: transparent;
      transition: background-color 0.25s;
      box-shadow: none;
      color: ${({ theme }) => theme.colors.primary};
      &&& a {
        /* color: ${({ theme }) => theme.colors.primary}; */
        border-color: white;
      }
    `}
`;

export default NavMenu;
