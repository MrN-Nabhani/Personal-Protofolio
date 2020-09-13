import styled from "styled-components";

const Links = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;

  a {
    color: inherit;
    padding: 0 1.5rem;
    border-right: 1px solid black;
    text-decoration: none;
    transition: padding ease 0.5s;

    &:hover {
      font-weight: bold;
      padding: 0px 40px;
    }
    &:focus {
      outline: none;
    }

    &:last-child {
      border: none;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.screen.tablet}){
    display: flex;
  }
`;

export default Links;
