import { createContext, useState } from "react";

// Create context
export const TodoContext = createContext();

// Create provider component
export const TodoProvider = ({ children }) => {
  const [Todos, setTodos] = useState([]);
  const [Task, setTask] = useState('');
  const [editTodo, setEditTodo] = useState('');
  const [theme, setTheme] = useState('light'); // theme state

  // toggle function to switch theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
   
    toggleTheme,
    theme
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
