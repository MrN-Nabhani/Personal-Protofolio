import styled, { css } from "styled-components";
import { Title } from "../../../../Shared/Typography";

/* this container includes the SkillGroupName and SkillsGroup */
export const SkillsContainer = styled.div`
  /* border: 1px solid red; */
  @media only screen and (min-width: ${({ theme }) =>
      theme.screen.largeDevice}) {
    width: 50%;
    padding: 1em 0;
  }
  @media only screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: auto;
    padding: 0 1em;
  }
`;

export const SkillGroupName = styled(Title)``;

export const SkillsGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const SkillIcon = styled.img`
  margin: auto;
  /* -webkit-filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.4)); */
  color: red;
  @media only screen and (min-width: ${({ theme }) => theme.screen.largeDevice}) {
    width: 64px;
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  cursor: not-allowed;
  opacity: 0.5;
  transition: padding 0.5s;
  ${({ disabled }) =>
    !disabled &&
    css`
      opacity: 1;
     cursor: pointer;
  &:hover {
    padding: 0.5rem;
    
    ul {
      display: block;
    }
    `}
  }
`;

export const SkillDetails = styled.ul`
  display: none;
  color: ${({ theme }) => theme.colors.secondary};

  padding-left: 1.5rem;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.small};
`;
