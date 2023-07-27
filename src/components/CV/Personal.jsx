import FileInput from "../utils/FileInput";
import Input from "../utils/Input";
import TextArea from "../utils/TextArea";

const Personal = (props) => {
  const { personalInfo, onChange } = props;

  return (
    <div>
      <h1>Personal Info</h1>
      <Input
        type="text"
        value={personalInfo.firstName}
        name="firstName"
        placeholder="First name"
        onChange={(e) => onChange(e)}
      ></Input>
      <Input
        type="text"
        value={personalInfo.lastName}
        name="lastName"
        placeholder="Last name"
        onChange={(e) => onChange(e)}
      ></Input>
      <Input
        type="email"
        value={personalInfo.email}
        name="email"
        placeholder="Email"
        onChange={(e) => onChange(e)}
      ></Input>
      <Input
        type="text"
        value={personalInfo.phoneNumber}
        name="phoneNumber"
        placeholder="Phone number"
        onChange={(e) => onChange(e)}
      ></Input>
      <FileInput
        type="file"
        value={personalInfo.photo}
        name="photo"
        placeholder=""
        onChange={(e) => onChange(e)}
      ></FileInput>

      <TextArea
        name="textArea"
        placeholder="Write something about yourself"
        value={personalInfo.textArea}
        onChange={(e) => onChange(e)}
      ></TextArea>
    </div>
  );
};

export default Personal;
