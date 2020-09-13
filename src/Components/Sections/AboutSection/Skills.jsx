import React from "react";
import * as Styled from "./style/SkillContainers";

const Skills = ({ title, skillSet}) => {

  return (
    <Styled.SkillsContainer>
      <Styled.SkillGroupName>{title}</Styled.SkillGroupName>
      <Styled.SkillsGroup>
        {skillSet.map(({ skillName, descList }, index) => (
          <Styled.Skill key={index} disabled={descList.length === 0}>
            <Styled.SkillIcon src={`Assets/svg/${skillName}-logo.svg`}/>
            <Styled.SkillDetails>
              {descList.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </Styled.SkillDetails>
          </Styled.Skill>
        ))}
      </Styled.SkillsGroup>
    </Styled.SkillsContainer>
  );
};

export default Skills;
