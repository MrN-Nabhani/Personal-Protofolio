import React from "react";
import ProjectsContainer from "./style/ProjectsContainer";
import Project from "./ProjectCard.jsx";

const ProjectsSection = ({ id }) => {
  return (
    <ProjectsContainer id={id}>
      <Project project_name="EMOTION" 
        preview_url="Assets/projectPhotos/EMOTION-appicon.png"
        project_desc="Consectetur ex mollit Lorem do aute exercitation ea occaecat et ipsum. Consectetur ea qui dolore amet aute cillum amet laboris laborum aute. Nulla irure quis sit ipsum veniam ipsum irure deserunt eu dolore magna nostrud cillum ea. Dolor ullamco tempor dolor anim consectetur cillum quis sint occaecat elit elit ad nisi officia."
      />

      <Project project_name="CF Who Solved It" 
        preview_url="Assets/projectPhotos/WhoSolvedItScreenshot.png"
        project_desc="Id fugiat velit minim eiusmod laborum nulla veniam exercitation ipsum. Excepteur officia et labore labore."
      />

      <Project project_name="AABU Schedule Editor" project_desc="Web app made with React and Redux " />
      <Project/>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
