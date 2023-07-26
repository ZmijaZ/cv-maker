import Education from "./CV/Education";
import Personal from "./CV/Personal";
import emptyCv from "./CV/emptyCv";

const Main = () => {
  return (
    <div>
      <h1>Main part </h1>
      <Personal personalInfo={emptyCv.personalInfo}></Personal>
      <Education education={emptyCv.educationInfo}></Education>
    </div>
  );
};

export default Main;
