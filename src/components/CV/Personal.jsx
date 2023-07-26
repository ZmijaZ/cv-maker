import Input from "../utils/Input";

const Personal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { personalInfo } = props;

  return (
    <div>
      <h1>Personal Info</h1>
      <Input
        type="text"
        value={personalInfo.firstName}
        name="firstName"
        placeholder={"First name"}
      ></Input>
      <Input
        type="text"
        value={personalInfo.lastName}
        name="lastName"
        placeholder={"Last name"}
      ></Input>
      <Input
        type="email"
        value={personalInfo.email}
        name="email"
        placeholder={"Email"}
      ></Input>
      <Input
        type="text"
        value={personalInfo.phoneNumber}
        name="phoneNumber"
        placeholder={"Phone number"}
      ></Input>
    </div>
  );
};

export default Personal;
