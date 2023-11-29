const Capitalize = () => {
  const [inputState, setInputState] = useState("");

  const capitalizeChange = (e) => {
    const inputValue = e.target.value;
    let capitalize = inputValue
    .split(" ")
    .map((w) =>  w.replace(w.charAt(0), w.charAt(0).toUpperCase()))
    .join(" ");    
     setInputState(capitalize);
  };

  return (
    <div>
      <input type="text" onChange={capitalizeChange} />
    </div>
  );
};

export default Capitalize;
