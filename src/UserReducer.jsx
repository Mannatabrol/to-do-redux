import { createSlice } from "@reduxjs/toolkit";
import { todoList } from "./Data";

const userSlice = createSlice({
    name: "users",
    initialState: todoList,
    reducers: {
       addUser: (state, action) => {
          state.push(action.payload);
       },
       updateUser: (state, action) => {
        const { id, task, description } = action.payload;
        const userToUpdate = state.find(user => user.id === id);
        if (userToUpdate) {
            userToUpdate.task = task;
            userToUpdate.description = description;
        }
       },
       deleteUser: (state, action) => {
        const { id } = action.payload;
        return state.filter(user => user.id !== id);
       }
    }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
