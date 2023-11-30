// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user:null, authenticated:false
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload
    },
    isAuthenticated: (state, action) => {
      
      state.authenticated = action.payload
    },
  },
});

export const { setUser, isAuthenticated } = userSlice.actions;

export default userSlice.reducer;
