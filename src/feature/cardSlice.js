import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    notify:false
}

const cardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
        notifyState:(state, action)=>{
            state.notify = action.payload
        }
    }
})
export const {notifyState} = cardSlice.actions;
export default cardSlice.reducer;