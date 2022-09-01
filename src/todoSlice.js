import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
}

export const todoSlice = createSlice({
name:"todo",
initialState,
reducers:{
    addTodo:(state,action)=>{
        state.value.push(action.payload);
    },
    removeTodo:(state,action)=>{ state.value=state.value.filter((_,index)=>index!==action.payload)},
    updateTodo:(state,action)=>{
        console.log(action.payload)
        state.value = state.value.map((todo,index)=>index===action.payload.index?action.payload.todo:todo);
    }
}
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;