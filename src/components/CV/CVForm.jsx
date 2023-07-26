import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";
import { emptyCv } from "./emptyCv";

const CVForm = (props) => {
  const {
    handleChangePersonal,
    handleChangeEducation,
    handleAddEducation,
    handleRemoveEducation,
    handleChangeExperience,
    handleAddExperience,
    handleRemoveExperience,
    cv,
  } = props;

  return (
    <div>
      <h1>CVForm</h1>
      <Personal
        personalInfo={cv.personalInfo}
        onChange={handleChangePersonal}
      ></Personal>
      <Education
        education={cv.educationInfo}
        onChange={handleChangeEducation}
        onRemove={handleRemoveEducation}
        onAdd={handleAddEducation}
      ></Education>
      <Experience
        experience={cv.experienceInfo}
        onChange={handleChangeExperience}
        onAdd={handleAddExperience}
        onRemove={handleRemoveExperience}
      ></Experience>
    </div>
  );
};

export default CVForm;
