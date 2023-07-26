import Button from "../utils/Button";
import ExperienceItem from "./ExperienceItem";

const Experience = (props) => {
  const { experience, onAdd, onRemove, onChange } = props;

  const experiences = experience.map((item) => (
    <ExperienceItem
      key={item.id}
      id={item.id}
      experienceInfo={item}
      onRemove={onRemove}
      onChange={onChange}
    ></ExperienceItem>
  ));

  return (
    <div>
      <h1>ExperienceInfo</h1>
      {experiences}
      <Button onClick={onAdd} text="Add"></Button>
    </div>
  );
};

export default Experience;
