import "./App.css";
import Counter from "./Counter";
function App() {
  function handleClick() {
    alert(" I am clicked");
  }
  const handleClick2 = () => {
    alert("You have press here");
  };

  const handleAdd = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };


  return (
    <>
      <h1>Hello I Am React</h1>
      <Counter></Counter>
    {/* Flex container with gap */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
      {/* {<button onclick="handleClick()">Click Me</button>} */}

      {/* function reference */}
      <button className="button-hover" onClick={handleClick}>Press Me</button>

      {/* <button onClick={ function handleClick(){ alert("You have clicked")}}>Press Here</button> */}

      {/* arrow/Inline function   */}
      <button className="button-hover" onClick={() => alert("Pressed here!")}>Press Here</button>
      {/* Arrow function variable */}
      <button className="button-hover" onClick={handleClick2}>Click me Too</button>
      <button className="button-hover" onClick={() => alert(" Click 3")}>Click Me 3</button>
      <button className="button-hover" onClick={() => handleAdd(5)}>Click Add</button>
      </div>
    </>
  );
}

export default App;
