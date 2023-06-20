import { createSlice } from "@reduxjs/toolkit";
import { addContactsThunk, deleteContactsThunk, getContactsThunk } from "./contactThunk";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = '';
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
        state.error = '';
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(el => el.id !== action.payload.id);
        state.error = '';
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReduser = contactSlice.reducer;