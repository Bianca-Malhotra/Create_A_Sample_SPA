
import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === '') return;
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <div className="app">
      <div className="todo-container">

        <div className="todo-input-row">
          <input
            type="text"
            value={todo}
            placeholder="Add todo..."
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}