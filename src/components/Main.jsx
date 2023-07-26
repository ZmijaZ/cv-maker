import { useState } from "react";
import Education from "./CV/Education";
import Personal from "./CV/Personal";
import { emptyCv } from "./CV/emptyCv";

const Main = () => {
  const [cv, setCv] = useState(emptyCv);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      personal: { ...prevState.personal, [name]: value },
    }));
  };

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

  return (
    <div>
      <h1>Main part </h1>
      <Personal
        personalInfo={cv.personal}
        onChange={handleChangePersonal}
      ></Personal>
      <Education
        education={cv.educationInfo}
        onChange={handleChangeEducation}
        onRemove={handleRemoveEducation}
        onAdd={handleAddEducation}
      ></Education>
    </div>
  );
};

export default Main;
