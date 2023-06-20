import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts(state , actions) {
      state.filter = actions.payload;
    },
  },
});


export const { filterContacts } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;