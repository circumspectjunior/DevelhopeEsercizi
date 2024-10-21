import { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {

    const [name, setName] = useState("")
    const handleChange = (event) => {
        setName(event.target.value);
      };

    return(
        <div>
            <h1>Controled Form</h1>
            <input type="text" value={name} onChange={handleChange}/>

         <Welcome name={name}/>
        </div>

    )
}

export default InteractiveWelcome;