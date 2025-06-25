import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {
  const object = {
    name: 'minh',
    age: '21',
    data: {
      city: 'hanoi',
      country: 'vietnam'
    }
  }
  const str = 'hello';

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew />
      <TodoData str={str} object={object} />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} alt="" />
      </div>
    </div>
  )
}

export default App
