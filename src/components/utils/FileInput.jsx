const FileInput = (props) => {
  const { onChange, name } = props;

  return <input type="file" onChange={onChange} name={name}></input>;
};

export default FileInput;
