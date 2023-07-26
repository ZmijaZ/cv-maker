function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
}

export default Button;
