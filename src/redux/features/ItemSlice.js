/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({id: Date.now(), text: action.payload});
    },
    editItem: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.text = action.payload.text;
      }
    },
    deleteItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const {addItem, editItem, deleteItem} = itemSlice.actions;
export default itemSlice.reducer;
