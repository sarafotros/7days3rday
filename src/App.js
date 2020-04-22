import React, { useState} from 'react';
import './App.css';
// import Home from './Home'
import ToDoForm from './components/TodoForm'

function App() {

  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  return (
    <div className="App">
      {/* <Home /> */}
      <h2>Todo or not toDo</h2>
      <ToDoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
