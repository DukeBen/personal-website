import "./WorkExperience.css";
import dynamicThumbnailDefault from "../Data/dynamic-thumbnail-default.png";
import dynamicThumbnailChanged from "../Data/dynamic-thumbnail-changed.png";
import ImageSlider from "../Components/ImageSlider";

const WorkExperience = () => {
    const slides = [
        {
            url: dynamicThumbnailDefault,
            title: 'default-dynamic-thumbnail'
        },
        {
            url: dynamicThumbnailChanged,
            title: 'changed-dynamic-thumbnail'
        },
    ]
  return (
    <>
      <div className="workContainer">
        <h1>Work Experience</h1>
        <div className="blingsContent">
          <h2>Blings.io</h2>
          <p>
            I created a component that allows for the creation of personalized
            Dynamic Thumbnails using React for the front-end and Node.js for the
            backend. The component is designed to be used by marketers in
            conjunction with a CRM to personalize email ads.
          </p>
          <p>
            Within the component, there is a custom built text editor for the
            top and bottom text that allows for two parameter tags to be
            inserted. There is the option to upload a specific file; change the
            font, color, stroke, weight, and size of the text; and also to
            implement a breakpoint to keep the font-size ratio the same if the
            text goes past a certain number of characters. There is also the
            option for a play button to be overlayed onto the thumbnail, and you
            can change the color and opacity.
          </p>
          <p>
            At a high level, the thumbnails become personalized when it is
            integrated into a CRM and the value of the Param tags are variable
            names that correspond to valid variable names that store data for
            marketers in a CRM.
          </p>
          <div className="workImageSliderContainer">
          <ImageSlider slides={slides} parentWidth = {650} timer = {false} />
        </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
