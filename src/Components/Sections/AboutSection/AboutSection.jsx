import React from "react";
import AboutContainer, { Mannequin } from "./style/AboutContainer";
import Skills from "./Skills.jsx";
import TextWrapper, {
  Header,
  Paragraph,
} from "../../../Shared/Typography";

import { FlexContainer } from "../../../Shared/Wrappers";

const About = ({ id }) => {
  return (
    <AboutContainer id={id}>
      <Mannequin src={"Assets/svg/mannequin.svg"} />
      <TextWrapper>
        <Header>Najm El-Deen Nabhani</Header>
        {/* <Subtext>
          (first name directly translates to Star of the Religion)
        </Subtext> */}
        <Paragraph>
          An iNspired computer scientist excells in creating valuable, effiecent
          and user-friendly applications for the web.
        </Paragraph>
        {/* <p>
            I love to work on challenging projects that forces me to think
            outside the box to find the best possible solution in terms of
            usability and performance.
          </p> */}

        <FlexContainer>
          <Skills
            title="Tech"
            skillSet={[
              { skillName: "HTML", descList: ["Semantic", "Modern HTML5"] },
              { skillName: "CSS", descList: ["SASS / Styled Components", "responsive design"] },
              {
                skillName: "JS",
                descList: ["ES6", "DOM manipulation", "Asynchronity"],
              },
            ]}
          />

          <Skills
            title="Frameworks"
            skillSet={[
              { skillName: "REACT", descList: ["Single Page Application", "Redux"] },
              { skillName: "UNITY", descList: ["2D game dev", "Puzzle generation"] },
            ]}
          />

          <Skills
            title="Tools"
            skillSet={[
              {
                skillName: "NPM",
                descList: ["Package management", "Webpack"],
              },
              { skillName: "GIT", descList: ["Source control", "Good documentation"] },
              { skillName: "XD", descList: ["Illustration", "Prototyping"] },
            ]}
          />
          <Skills
            title="To Learn"
            disabled
            skillSet={[
              { skillName: "NODE", descList: [] },
              { skillName: "MONGO", descList: [] },
            ]}
          />
        </FlexContainer>
        {/* <Skills
          title="Tools"
          skillSet={[
            { skillName: "HTML", descList: ["semantic", "modern HTML5"] },
          ]}
        /> */}
      </TextWrapper>
    </AboutContainer>
  );
};

export default About;
