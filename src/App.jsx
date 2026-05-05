import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';


function App() {

  const [todos, setTodos] = useState([]);

  const handleDeleteTodo = (todoId) => {
    // const _todos = [...]
  }

  return (
    <div id="App" className='container'>
      <Header />
      <div className="todo-parent">
        <AddTodo />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
