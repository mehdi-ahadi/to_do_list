import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {

  const [todos, setTodos] = useState([])
  return (
    <div id="App">
      <h1>To Do List</h1>
      <div className="todo-parent">
        <AddTodo />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
