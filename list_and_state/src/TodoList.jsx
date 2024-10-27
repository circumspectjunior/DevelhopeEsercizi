import { useRef, useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null)

    const handlInputChange = (event) => {
        event.preventDefault();

        setInputValue(event.target.value);



    }


    const handleAddToArray = (e) => {
        e.preventDefault();
           setTodos((c) => [...c, inputValue]);
           setInputValue("");

    }

    const handleReset = (e) => {
        e.preventDefault();
        setTodos([]);
    }

    const handleRemove = (index) => {
        
        const newTodos = todos.filter((p, i) => i !== index);
    setTodos(newTodos);
  };

    

    return (

        <div>
            <ul>

             {
                todos.map((items, i) => <li>{items} <button onClick={() => handleRemove(i)}>Remove</button></li>)
             }

            </ul>
            <form action="">

            <input type="text" value={inputValue} ref={inputRef} onChange={handlInputChange}/>
            <button onClick={handleAddToArray}>Add to list</button>
            <button onClick={handleReset}>Reset Todo</button>


            </form>
            
        </div>
    )
} 
export default TodoList;