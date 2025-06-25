import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: todoList.length + 1,
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ? <TodoData todoList={todoList} /> : <div className='todo-image'>
        <img className='logo' src={reactLogo} alt="" />
      </div>}
      {/* {todoList.length === 0 &&
        <div className='todo-image'>
          <img className='logo' src={reactLogo} alt="" />
        </div>
      } */}
    </div>
  )
}

export default App
