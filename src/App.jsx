import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {

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

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length > 0 ? <TodoData todoList={todoList} deleteTodo={deleteTodo} /> : <div className='todo-image'>
          <img className='logo' src={reactLogo} alt="" />
        </div>}
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
