import {createSlice} from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    editItem: (state, action) => {
      const {index, editedItem} = action.payload;
      state[index] = editedItem;
    },
    deleteItem: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    setItems: (state, action) => {
      return action.payload;
    },
  },
});

export const {addItem, editItem, deleteItem, setItems} = itemSlice.actions;
export default itemSlice.reducer;
