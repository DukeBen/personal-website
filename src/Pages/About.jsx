import "./About.css";
import ImageSlider from "../Components/ImageSlider";
import profPic from "../Data/website-picture.png";
import DukeLogo from "../Data/duke-logo.png";
import onePieceLogo from "../Data/one-piece.jpg";
import duneLogo from "../Data/dune.jpg";
const About = () => {
  const slides = [
    {
      url: profPic,
      title: "profile-pic",
    },
    { url: DukeLogo, title: "Duke-logo" },
    {
      url: onePieceLogo,
      title: "one-piece-logo",
    },
    {
      url: duneLogo,
      title: "dune-logo",
    },
  ];
  return (
    <>
      <div className="aboutContainer">
        <h1>About Me</h1>
        <p
          className="aboutContent"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Hey! My name is Ben Goldfried.
        </p>
        <p className="aboutContent">
          Right now, I'm in my junior year at Duke University, studying Computer
          Science and minoring in Mathematics. It's been a challenging yet
          fulfilling journey so far.
        </p>
        <p className="aboutContent">
          Over this past summer, I interned as a Software Engineer at a startup
          called {" "}
          <a
            className="inline-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.blings.io/"
          >
            Blings.io
          </a>{" "}
          in Tel Aviv, Israel. This experience gave me a chance to enhance my
          skills in React.js and Node.js and reaffirmed my interest in web
          application development.
        </p>
        <p className="aboutContent">
          Apart from my academic pursuits, I enjoy a variety of hobbies.
          Recently, I finished reading Dune, and I regularly watch anime series
          like One Piece and Naruto. I also value physical fitness and enjoy
          weightlifting, and there's rarely a day that goes by without spending
          time with my friends.
        </p>

        <p className="aboutContent">
          In terms of future plans, I'm excited about studying abroad in
          Copenhagen next semester. I'm looking forward to experiencing a new
          culture and broadening my horizons.
        </p>

        <div className="containerStyles">
          <ImageSlider slides={slides} parentWidth={400} timer={true} />
        </div>
      </div>
    </>
  );
};

export default About;
