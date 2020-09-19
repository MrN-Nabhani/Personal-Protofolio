import React from "react";
import ProjectsContainer from "./style/ProjectsContainer";
import Project from "./ProjectCard.jsx";

const ProjectsSection = ({ id }) => {
  return (
    <ProjectsContainer id={id}>
      <Project project_name="EMOTION" 
        preview_url="Assets/projectPhotos/EMOTION-appicon.png"
        project_desc="Android game with infinite levels. the puzzle is randomly generated using a constructive algorithm in such a way that a solution always exists."
        project_link="https://play.google.com/store/apps/details?id=com.Mr.N.Emotions"
      />

      <Project project_name="CF Who Solved It" 
        preview_url="Assets/projectPhotos/WhoSolvedItScreenshot.png"
        project_desc="A web app built using Codeforces.com API, it helps tell if a user had solved a specific problem using the problem's ID (numbers) and index (character)"
        project_link="https://mrn-nabhani.github.io/Who-Solved-It/"
      />

      <Project project_name="AABU Schedule Builder"
        preview_url="Assets/projectPhotos/AABU-Schedule-Builder.jpg"
        project_desc="A user-friendly web app that facilitates the scheduling process for university students. It combines the views for the student's study plan, schedule, and the available material for the current semester" 
        project_link="https://aabuschedule.herokuapp.com/"
       />
    </ProjectsContainer>
  );
};

export default ProjectsSection;
