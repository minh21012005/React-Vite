import { useState } from "react";

const TodoNew = (props) => {

    const { addNewTodo } = props;

    const [valueInput, setValueInput] = useState();

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput('');
    }

    const handleChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className='todo-new'>
            <input type="text" value={valueInput} onChange={(event) => { handleChange(event.target.value) }} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}
export default TodoNew;