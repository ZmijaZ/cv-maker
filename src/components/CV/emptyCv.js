import emptyAvatar from "../../empty_avatar.png";

let emptyCv = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    textArea: "",
    photo: emptyAvatar,
  },
  educationInfo: [
    {
      id: 1,
      schoolName: "",
      major: "",
      from: "",
      to: "",
    },
  ],
  experienceInfo: [
    {
      id: 1,
      companyName: "",
      position: "",
      from: "",
      to: "",
    },
  ],
};

export { emptyCv };
