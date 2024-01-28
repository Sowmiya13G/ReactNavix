import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    items: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      state.items = [...state.items, newItem]; 
    },
  },
});

export const {setProducts, addItem} = productsSlice.actions;
export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
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


//     removeItem: (state, action) => {
//       const itemId = action.payload;
//       state.items = state.items.filter(item => item.id !== itemId);
//     },
//   },
// });
// export const {setProducts, , removeItem} = productsSlice.actions;
// export default productsSlice.reducer;

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     return data;
//   },
// );
