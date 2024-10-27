import { useEffect, useRef } from "react";


const FocusInputComponent = () => {

    const mountRef = useRef(false)

    const focusReff = useRef(null)

    useEffect(
        ()=> {
         focusReff.current.focus();
         
         if (!mountRef.current){
            console.log("Mounted for the first time")
            mountRef.current = true;
         }

        },[]
    )

    

    return(
        <div>
            <input type="text" ref={focusReff} />
        </div>
    )
}

export default FocusInputComponent;