import Button from "../utils/Button";
import EducationItem from "./EducationItem";

const Education = (props) => {
  const { education, onRemove, onChange, onAdd } = props;

  const educations = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationInfo={educationItem}
      onRemove={onRemove}
      onChange={onChange}
    ></EducationItem>
  ));

  return (
    <div>
      <h1>Education info</h1>
      {educations}
      <Button text="Add" onClick={onAdd}></Button>
    </div>
  );
};

export default Education;
