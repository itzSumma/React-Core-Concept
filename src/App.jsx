import "./App.css";

function App() {

function handleClick(){
  alert (" I am clicked")
}
const  handleClick2=()=>{alert("You have press here")}

const handleAdd =(num)=>{
  const newNum = num + 5;
  alert(newNum);
}
  return (
    <>
      <h1>Hello</h1>


      {/* {<button onclick="handleClick()">Click Me</button>} */}

      {/* function reference */}
      <button onClick={handleClick}>Press Me</button>

      {/* <button onClick={ function handleClick(){ alert("You have clicked")}}>Press Here</button> */}
       
       {/* arrow/Inline function   */}
      <button onClick={() => alert("Pressed here!")}>
        Press Here
      </button>  
{/* Arrow function variable */}
      <button onClick={handleClick2}>Click me Too</button>
      <button onClick={()=> alert(" Click 3")}>Click Me 3</button>  
      <button onClick={()=>handleAdd(5)}>Click Add</button>
    </>
  );
}

export default App;
