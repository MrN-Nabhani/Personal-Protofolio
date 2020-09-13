import React from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Landing from "./Components/Landing/Landing.jsx";

import Container from "./Components/Sections/Container.jsx";
import About from "./Components/Sections/AboutSection/AboutSection.jsx";
import ProjectsSection from "./Components/Sections/ProjectsSection/ProjectsSection.jsx";
import IllustrationSection from "./Components/Sections/IllustrationSection/IllustrationSection.jsx";

function App() {
  return (
    <div id="#" className="App">
      <NavBar />

      <Landing />

      <Container>
        <About id="about"/>

        <ProjectsSection id="projects"/>

        <IllustrationSection id="illustrations"/>
      </Container>
    </div>
  );
}

export default App;

{
  /*
      
        </div> */
}
