import './ProjectCard.css'

const ProjectCard = ({title, projectURL, imgURL, text, createdWith}) => {
    return (
        <>
         <a target="_blank" href = {projectURL} className = 'projectLink'>
            <div className="projectContainer">
                <h3 style = {{display: 'flex', justifyContent: "center"}}>{title}</h3>
               
                    <div className="projectImgContainer">
                        <img src = {imgURL} />
                    </div>
               
                <p style = {{fontSize: '12px'}}>{text}</p>
                <footer style = {{fontSize: '10px'}}>{createdWith}</footer>
            </div>
            </a>
        </>
    )
}

export default ProjectCard;