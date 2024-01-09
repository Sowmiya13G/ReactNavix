/* eslint-disable prettier/prettier */
 /* eslint-disable prettier/prettier */
// import { createSlice } from '@reduxjs/toolkit';

// export const formDataSlice = createSlice({
//   name: 'formData',
//   initialState: [],
//   reducers: {
//     setFormData: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { setFormData } = formDataSlice.actions;
// export const selectFormData = (state) => state.formData;

// export default formDataSlice.reducer;
// FormDataSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// export const formDataSlice = createSlice({
//   name: 'formData',
//   initialState: [],
//   reducers: {
//     addUserProfile: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

// export const { addUserProfile } = formDataSlice.actions;
// export const selectFormData = (state) => state.formData;
// export default formDataSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    profiles: [],
    progress: 0, 
  },
  reducers: {
    addUserProfile: (state, action) => {
      state.profiles.push(action.payload);
      const totalFields = Object.keys(action.payload).length;
      const filledFields = Object.values(action.payload).filter((value) => value !== '').length;
      state.progress = (filledFields / totalFields) * 100;
    },
  },
});

export const { addUserProfile } = formDataSlice.actions;
export const selectFormData = (state) => state.formData;
export default formDataSlice.reducer;
