const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, value, placeholder, name, onChange } = props;

  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default Input;
