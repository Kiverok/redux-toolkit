import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {addTodo} from './store/todoSlice';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text} ))
    setText('');
  };


// const toggleTodoComplete = (todoId) => {
// //   setTodos(
// //     todos.map(
// //       todo => {
// //         if (todo.id !== todoId) return todo;

// //        return {
// //         ...todo,
// //         completed: !todo.completed,
// //        }
// //       }
// //     )
// //   )
// // }

// const removeTodo = (todoId) => {
// //   setTodos(todos.filter(todo => todo.id !== todoId))
// // }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}


export default App;
