import "./Projects.css";
import ProjectCard from "../Components/ProjectCard";
import etchASketch from "../Data/etch-a-sketch.png";
import militaryProjImg from "../Data/military-spending-proj.png"
import websitePreview from "../Data/website-preview.png"
import streamingServices from "../Data/streamingServices.png"
import enhancingCancerDetection from '../Data/medium.png'
const Projects = () => {
  const projects = [
    {
      title: "Enhancing Cancer Detection with StyleGAN-2 ADA",
      projectURL: "https://github.com/istebbins/Enhancing-Cancer-Detection-with-StyleGAN-2-ADA",
      imgURL: enhancingCancerDetection,
      text: "Project published by Towards Data Science.  Uses AI/ML to more accurately detect tumors.",
      createdWith: "PyTorch, Google Colab, Kaggle"
    },
    {
      title: "OpenLook -- in progress",
      projectURL: "https://github.com/bmaizes/OpenLook",
      imgURL: streamingServices,
      text: "A website that allows you to search for movies/shows based on your streaming platform subscriptions and country.",
      createdWith: "AWS Lambda, Firebase, Angular"
    },
    {
      title: "Personal Website",
      projectURL: "https://github.com/DukeBen/personal-website",
      imgURL: websitePreview,
      text: 'My personal website.  Made in the summer of 2023 with lots of love <3',
      createdWith: 'Created with React.js'
    },
      {
        title: "Military Spending Analysis",
        projectURL: "https://github.com/DukeBen/miltary-spending-and-happiness",
        imgURL: militaryProjImg,
        text: 'This was a group project that my friends and I created to investigate a topic that frequently makes headlines.',
        createdWith: 'Created with Pandas, NumPy, and Seaborn'
      },
    {
      title: "Etch-A-Sketch",
      projectURL: "https://github.com/DukeBen/etch-a-sketch",
      imgURL: etchASketch,
      text: "This is one of the first projects I ever made.  Minimalism is part of the design.  Click to find out why!",
      createdWith: "Created with raw JS, HTML, and CSS",
    },
  ];
  return (
    <>
      <div className="projectPageContainer">
        <h1>Projects</h1>
        <div className="projectContainer">

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
      </div>
    </>
  );
};

export default Projects;
