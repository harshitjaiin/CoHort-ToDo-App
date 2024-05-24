import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'
import './App.css'

function App() {

  const [todos , setTodos] = useState([]);

  //this is not the right way to hit the backend
  //infinite requests are going continuosly on the backend server!
  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    console.log(json);
    setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
