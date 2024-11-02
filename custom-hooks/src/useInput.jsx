import { useState } from "react";


const useInput = () => {
    const [userNameInput, setUserNameInput] = useState([]);

    const handleChange = (event) => {
        setUserNameInput(event.target.value);


    }

    return {
        value,
        handleChange,
    };


}