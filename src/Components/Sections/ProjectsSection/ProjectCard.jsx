import React from "react";
import * as P from "./style/ProjectDisplay";

const Project = ({
  preview_url = "https://via.placeholder.com/400.png",
  project_name = "Project Name",
  project_desc = "Id fugiat velit minim eiusmod laborum nulla veniam exercitation ipsum. Excepteur officia et labore labore.",
}) => {
  return (
    <P.ProjectWrapper>
      <P.ProjectImage src={preview_url} />
      <P.ProjectDetails>
        <P.ProjectTitle>{project_name}</P.ProjectTitle>
        <P.ProjectDescribtion>{project_desc}</P.ProjectDescribtion>
      </P.ProjectDetails>
    </P.ProjectWrapper>
  );
};

export default Project;