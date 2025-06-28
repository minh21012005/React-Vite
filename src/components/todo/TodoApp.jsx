import TodoData from './TodoData'
import TodoNew from './TodoNew'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (name) => {
        const newTodo = {
            id: todoList.length + 1,
            name: name
        }
        setTodoList([...todoList, newTodo])
    }

    const deleteTodo = (targetId) => {
        const newList = todoList.filter(item => item.id !== targetId);
        setTodoList(newList);
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo list</div>
            <TodoNew addNewTodo={addNewTodo} />
            {todoList.length > 0 ? <TodoData todoList={todoList} deleteTodo={deleteTodo} /> : <div className='todo-image'>
                <img className='logo' src={reactLogo} alt="" />
            </div>}
        </div>
    )
}


export default TodoApp;