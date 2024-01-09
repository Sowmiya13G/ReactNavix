/* eslint-disable prettier/prettier */
 /* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    profiles: [],
    progress: 0, 
    photo: '', 
  },
  reducers: {
    addUserProfile: (state, action) => {
      state.profiles.push(action.payload);
      const totalFields = Object.keys(action.payload).length;
      const filledFields = Object.values(action.payload).filter((value) => value !== '').length;
      state.progress = (filledFields / totalFields) * 100;
    },
    setFormData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updatePhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const { addUserProfile , setFormData, updatePhoto} = formDataSlice.actions;
export const selectFormData = (state) => state.formData;
export default formDataSlice.reducer;
