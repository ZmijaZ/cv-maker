const TextArea = (props) => {
  const { name, value, placeholder, onChange } = props;

  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
