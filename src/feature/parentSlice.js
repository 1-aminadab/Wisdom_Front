// parentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    parents: [
        {
          id: '1',
          name: 'John Parent',
          email: 'john.parent@example.com',
          children: [
            {
              id: '001',
              name: 'John Doe',
              grade: '10A',
            },
            {
              id: '002',
              name: 'Jane Doe',
              grade: '10B',
            },
            // Add more children as needed
          ],
        },
        {
          id: '2',
          name: 'Jane Parent',
          email: 'jane.parent@example.com',
          children: [
            {
              id: '003',
              name: 'Jack Doe',
              grade: '11A',
            },
            // Add more children as needed
          ],
        },
        // Add more parents as needed
      ],
};

const parentSlice = createSlice({
  name: 'parent',
  initialState,
  reducers: {
    addParent: (state, action) => {
      state.parents.push(action.payload);
    },
    addChildToParent: (state, action) => {
      const { parentId, child } = action.payload;
      const parent = state.parents.find((p) => p.id === parentId);
      if (parent) {
        parent.children.push(child);
      }
    },
    markChildAttendance: (state, action) => {
      const { parentId, childId, status } = action.payload;
      const parent = state.parents.find((p) => p.id === parentId);
      if (parent) {
        const child = parent.children.find((c) => c.id === childId);
        if (child) {
          child.attendanceStatus = status;
        }
      }
    },
  },
});

export const { addParent, addChildToParent, markChildAttendance } = parentSlice.actions;
export const selectParents = (state) => state.parent.parents;

export default parentSlice.reducer;
