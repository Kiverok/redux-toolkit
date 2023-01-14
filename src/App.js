import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addNewTodo,  fetchTodos } from './store/todoSlice';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {
  const [text, setText] = useState('');
  const {status, error} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
   if(text.trim().length) {
    dispatch(addNewTodo(text));
    setText('');
   }
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
      
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}


export default App;
