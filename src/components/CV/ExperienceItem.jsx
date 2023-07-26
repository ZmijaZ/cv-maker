import Button from "../utils/Button";
import Input from "../utils/Input";

const ExperienceItem = (props) => {
  const { experienceInfo, onChange, onRemove, id } = props;

  return (
    <div>
      <Input
        type="text"
        value={experienceInfo.schoolName}
        name="companyName"
        placeholder="Company name"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="text"
        value={experienceInfo.major}
        name="position"
        placeholder="Position"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="date"
        value={experienceInfo.from}
        name="from"
        placeholder="From"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="date"
        value={experienceInfo.to}
        name="to"
        placeholder="To"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Button onClick={() => onRemove(id)} text="Remove"></Button>
    </div>
  );
};

export default ExperienceItem;
