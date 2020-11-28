import styled from "styled-components";

const ProjectsContainer = styled.section`
  margin: auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
  padding-top: 10%;
  
  text-align: center;

	@media only screen and (min-width: ${({ theme }) =>
      theme.screen.tablet}) {
    flex-direction: row;
		border: 1px solid red;
    justify-content: space-between;
  }
  
`;

export default ProjectsContainer;