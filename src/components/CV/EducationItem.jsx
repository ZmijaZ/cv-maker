import Button from "../utils/Button";
import Input from "../utils/Input";

const EducationItem = (props) => {
  const { educationInfo, onRemove, id, onChange } = props;

  return (
    <div>
      <Input
        type="text"
        value={educationInfo.schoolName}
        name="schoolName"
        placeholder="School name"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="text"
        value={educationInfo.major}
        name="major"
        placeholder="Major"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="date"
        value={educationInfo.from}
        name="from"
        placeholder="From"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="date"
        value={educationInfo.to}
        name="to"
        placeholder="To"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Button onClick={() => onRemove(id)} text="Remove education"></Button>
    </div>
  );
};

export default EducationItem;
