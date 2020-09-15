import styled from "styled-components";
import {Link} from "../../../Shared/Typography";

const Links = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme.screen.tablet}){
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  border-right: 1px solid black;
  transition: padding ease 0.5s;
  padding: 0 1.5rem;
  
  &:hover {
      font-weight: bold;
      padding: 0px 40px;
      text-decoration: none;
  }

  &:last-child {
    border: none;
  }
`

export default Links;
