import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                    id: new Date().toISOString(),
                    text: action.payload.text
                    completed: false,
            })
        },
        removeTodo(state, action) {},
        toddleTodoComplete(state, action) {}
    },
});

export const {addTodo, removeTodo, toddleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;