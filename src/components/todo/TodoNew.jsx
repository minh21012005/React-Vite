import { useState } from "react";

const TodoNew = (props) => {

    const { addNewTodo } = props;

    const [valueInput, setValueInput] = useState();

    const handleClick = () => {
        addNewTodo(valueInput);
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