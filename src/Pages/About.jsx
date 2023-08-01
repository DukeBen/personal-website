import "./About.css";
import ImageSlider from "../Components/ImageSlider";
import profPic from '../Data/website-picture.png'
import DukeLogo from '../Data/duke-logo.png'
import onePieceLogo from '../Data/one-piece.jpg'
import duneLogo from '../Data/dune.jpg'
const About = () => {

    const slides = [
        {
            url: profPic,
            title: 'profile-pic'
        },
        {url: DukeLogo,
        title: 'Duke-logo'},
        {
            url: onePieceLogo,
            title: 'one-piece-logo'
        },
        {
            url: duneLogo,
            title: 'dune-logo'
        }
    ]
    return (
    <>
      <div className="aboutContainer">
        <h1>About Me</h1>
        <p className="aboutContent" style = {{display: 'flex', justifyContent: 'center'}}>
          Hey! My name is Ben Goldfried. 
        </p>
        <p className='aboutContent'>
            I am currently a junior at Duke
          University studying Computer Science with a minor in Mathematics. This
          past summer I worked as a Software Engineer Intern at a video software
          startup called
          <a className = 'inline-link' target="_blank" href="https://www.blings.io/">
            {" "}
            Blings.io
          </a>{" "}
          in Tel Aviv, Israel. During this internship, I really developed my
          React.js and Node.js skills, as well as solidified my interest in
          creating web applications!
        </p>
        <p className="aboutContent">
          Outside of Computer Science, my hobbies include reading (just finished
          Dune!), watching Anime (One Piece and Naruto are goated), lifting
          weights, hanging out with friends, and traveling. This this upcoming
          semester I will be studying abroad in Copenhagen and I could not be
          more excited to immerse myself into a new environment and experience a
          different culture.
        </p>

        <div className = 'containerStyles'>
          <ImageSlider slides={slides} parentWidth = {400} />
        </div>
      </div>
    </>
  );
};

export default About;
