const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, value, placeholder, name } = props;

  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
