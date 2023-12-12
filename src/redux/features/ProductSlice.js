import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  },
);

// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     data: [],
//     items: [],
//   },
//   reducers: {
//     setProducts: (state, action) => {
//       state.data = action.payload;
//     },
//     addItem: (state, action) => {
//       const newItem = action.payload;
//       state.items.push(newItem);
//     },

//     removeItem: (state, action) => {
//       const itemId = action.payload;
//       state.items = state.items.filter(item => item.id !== itemId);
//     },
//   },
// });
// export const {setProducts, addItem, removeItem} = productsSlice.actions;
// export default productsSlice.reducer;

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     return data;
//   },
// );
