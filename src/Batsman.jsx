import { useState } from "react"

export default function Batsman (){
    const [runs,setRun]=useState(0);
const [sixes, setSixes]=useState(0)
const [fours, setFours]=useState(0)
    const handleSingle=()=>{
        const updatedRuns = runs +1;
        setRun(updatedRuns);
    } 
    const handleDouble=()=>{
        const updatedRuns = runs +2;
        setRun(updatedRuns);
    } 
    const handleFour=()=>{
        const updatedRuns = runs +4;
        const updateFour = fours+1;
        setFours(updateFour);
        setRun(updatedRuns);
    } 
    const handleSix=()=>{
        const updatedRuns = runs +6;
        const updatedSixes = sixes +1;
        setSixes(updatedSixes);
        setRun(updatedRuns);
    } 
    return(
        <div>
            <h2>Player: Bangladeshi</h2>
            {
                <h3><b>Six:{sixes}</b></h3>
            
            }
            {
                <h3> <strong>Four:{fours}</strong>

                </h3>
            }
            {
                runs >50 && <p>You score half-century</p>
            }
            <h1>Score:{runs}</h1>
            <div className="button-box">
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
       </div>
        </div>
    )
}