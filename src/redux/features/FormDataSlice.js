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
      const { key, value } = action.payload;
      if (key && key.includes('.')) {
        const keys = key.split('.');
        let currentState = state;

        for (let i = 0; i < keys.length - 1; i++) {
          currentState = currentState[keys[i]];
        }

        currentState[keys[keys.length - 1]] = value;
      } else {
        state[key] = value;
      }
    },
    updatePhoto: (state, action) => {
      state.photo = action.payload.uri;
    },
  },
});

export const { addUserProfile, setFormData, initialState, updatePhoto } = formDataSlice.actions;
export const selectFormData = (state) => state.formData;
export default formDataSlice.reducer;
