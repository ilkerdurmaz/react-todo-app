import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list:localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
}

export const todoSlice = createSlice({
name:"todo",
initialState,
reducers:{
    addTodo:(state,action)=>{
        state.list.push(action.payload);
        localStorage.setItem("todos",JSON.stringify(state.list));
    },
    removeTodo:(state,action)=>{ state.list=state.list.filter((_,index)=>index!==action.payload)},
    updateTodo:(state,action)=>{
        console.log(action.payload)
        state.list = state.list.map((todo,index)=>index===action.payload.index?action.payload.todo:todo);
        localStorage.setItem("todos",JSON.stringify(state.list));
    }
}
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;