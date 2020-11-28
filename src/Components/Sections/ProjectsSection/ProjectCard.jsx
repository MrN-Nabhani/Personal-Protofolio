import React from "react";
import * as P from "./style/ProjectDisplay";

const Project = ({
  preview_url = "https://via.placeholder.com/400.png",
  project_name = "Project Name",
  project_desc = "Id fugiat velit minim eiusmod laborum nulla veniam exercitation ipsum. Excepteur officia et labore labore.",
  project_link = ''
}) => {
  return (
    <P.ProjectWrapper>
      <P.ProjectImage src={preview_url} />
      <P.ProjectTitle>{project_name}</P.ProjectTitle>
      <P.ProjectDetails>
        {/* <P.ProjectDescribtion>{project_desc}</P.ProjectDescribtion> */}
        {/* <P.ProjectViewButton url={project_link}> View Project </P.ProjectViewButton> */}
      </P.ProjectDetails>
    </P.ProjectWrapper>
  );
};

export default Project;
