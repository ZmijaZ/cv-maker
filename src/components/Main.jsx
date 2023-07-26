import { useState } from "react";
import Education from "./CV/Education";
import Personal from "./CV/Personal";
import { emptyCv } from "./CV/emptyCv";
import Experience from "./CV/Experience";

const Main = () => {
  const [cv, setCv] = useState(emptyCv);

  //Personal
  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      personalInfo: { ...prevState.personalInfo, [name]: value },
    }));
  };

  //Education
  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const items = prevState.educationInfo.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      });
      return { ...prevState, educationInfo: items };
    });
  };

  const handleRemoveEducation = (id) => {
    console.log(id);
    setCv((prevState) => {
      const items = prevState.educationInfo.filter((item) => item.id !== id);

      return { ...prevState, educationInfo: items };
    });
  };

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      educationInfo: [
        ...prevState.educationInfo,
        {
          id: prevState.educationInfo.length + 1,
          schoolName: "",
          major: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  //Experience

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const items = prevState.experienceInfo.map((item) => {
        if (id === item.id) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      });
      return { ...prevState, experienceInfo: items };
    });
  };

  const handleRemoveExperience = (id) => {
    setCv((prevState) => {
      const items = prevState.experienceInfo.filter((item) => item.id !== id);
      return { ...prevState, experienceInfo: items };
    });
  };

  const handleAddExperience = () => {
    setCv((prevState) => {
      return {
        ...prevState,
        experienceInfo: [
          ...prevState.experienceInfo,
          {
            id: prevState.experienceInfo.length + 1,
            companyName: "",
            position: "",
            from: "",
            to: "",
          },
        ],
      };
    });
  };

  return (
    <div>
      <h1>Main part </h1>
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

export default Main;
