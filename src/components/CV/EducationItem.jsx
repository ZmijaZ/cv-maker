import Button from "../utils/Button";
import Input from "../utils/Input";

const EducationItem = (props) => {
  const { educationInfo, onRemove, id } = props;

  return (
    <div>
      <Input
        type="text"
        value={educationInfo.schoolName}
        name="schoolName"
        placeholder="School name"
      ></Input>
      <Input
        type="text"
        value={educationInfo.major}
        name="major"
        placeholder="Major"
      ></Input>
      <Input
        type="date"
        value={educationInfo.from}
        name="from"
        placeholder="From"
      ></Input>
      <Input
        type="date"
        value={educationInfo.to}
        name="to"
        placeholder="To"
      ></Input>
      <Button onClick={() => onRemove(id)} text="Remove"></Button>
    </div>
  );
};

export default EducationItem;
