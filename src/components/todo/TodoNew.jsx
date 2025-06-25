import { useState } from "react";

const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState();

    const handleClick = () => {
        console.log(valueInput);
    }

    const handleChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => { handleChange(event.target.value) }} />
            <button onClick={handleClick}>Add</button>
            <div>{valueInput}</div>
        </div>
    );
}
export default TodoNew;