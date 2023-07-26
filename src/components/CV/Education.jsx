import EducationItem from "./EducationItem";

const Education = (props) => {
  const { education, onRemove } = props;

  const educations = education.map((educationItem) => {
    return (
      <EducationItem
        id={educationItem.id}
        key={educationItem.id}
        educationInfo={educationItem}
        onRemove={onRemove}
      ></EducationItem>
    );
  });

  return (
    <div>
      <h1>Education info</h1>
      {educations}
    </div>
  );
};

export default Education;
