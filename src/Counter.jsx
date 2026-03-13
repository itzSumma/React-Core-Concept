import { useState } from "react"

export default function Counter (){
    const counterStyle ={
        border : "2px solid yellow",
     
       paddingTop: 10,
        paddingBottom: 15,
        width:"250px",
        margin: "20px auto 20px auto"
    }
    const [count, setCount]=useState(0);
const handleAdd =()=>{
    console.log("clicked")
    const newCount = count +1;
    setCount(newCount);
}

return(
<div style={counterStyle}>
    <h3>Count:{count}</h3>
    <button onClick={handleAdd} >Add</button>
</div>

)

}