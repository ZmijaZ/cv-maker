const CV = (props) => {
  const { personalInfo, educationInfo, experienceInfo } = props;

  const educations = educationInfo.map((item) => (
    <section key={item.id}>
      <h3>{item.schoolName}</h3>
      <h3>{item.major}</h3>
      <h3>{item.from}</h3>
      <h3>{item.to}</h3>
    </section>
  ));

  const experiences = experienceInfo.map((item) => (
    <section key={item.id}>
      <h3>{item.companyName}</h3>
      <h3>{item.position}</h3>
      <h3>{item.from}</h3>
      <h3>{item.to}</h3>
    </section>
  ));

  return (
    <div className="cv-report">
      <h1>CV</h1>
      <section>
        <h2>Personal</h2>
        <h3>{personalInfo.firstName}</h3>
        <h3>{personalInfo.lastName}</h3>
        <h3>{personalInfo.email}</h3>
        <h3>{personalInfo.phoneNumber}</h3>
        <p>{personalInfo.textArea}</p>
        <img src={personalInfo.photo}></img>
      </section>

      <section>
        <h2>Education</h2>
        {educations}
      </section>

      <section>
        <h2>Experience</h2>
        {experiences}
      </section>
    </div>
  );
};

export default CV;
