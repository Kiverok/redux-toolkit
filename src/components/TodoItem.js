import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, toddleTodoComplete } from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  
  return (
    <li>
      <input 
            type="checkbox" 
            checked={completed}
            onChange={() => dispatch(toddleTodoComplete({id}))} />
            <span>{title}</span>
            <span className="delete" onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  )
}

export default TodoItem
