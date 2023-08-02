import "./Projects.css";
import ProjectCard from "../Components/ProjectCard";
import etchASketch from "../Data/etch-a-sketch.png";
const Projects = () => {
  const projects = [
      {
        title: "Military Spending and Happiness Analysis",
        projectURL: "https://github.com/DukeBen/miltary-spending-and-happiness",
        imgURL: '',
        text: '',
        createdWith: 'Created with Pandas, NumPy, and Seaborn'
      },
    {
      title: "Etch-A-Sketch",
      projectURL: "https://github.com/DukeBen/etch-a-sketch",
      imgURL: etchASketch,
      text: "This is one of the first projects I ever made.  Minimalist is part of the design.  Click to find out why!",
      createdWith: "Created with raw JS, HTML, and CSS",
    },
  ];
  return (
    <>
      <div className="workContainer">
        <h1>Projects</h1>
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              projectURL={project.projectURL}
              imgURL={project.imgURL}
              text={project.text}
              createdWith={project.createdWith}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
