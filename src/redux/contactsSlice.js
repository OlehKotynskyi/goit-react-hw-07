import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsAPI';

const contactsSlice = createSlice({
   name: 'contacts',
   initialState: {
      items: [],
      loading: false,
      error: null,
   },
   extraReducers: builder => {
      builder
         .addCase(fetchContacts.pending, state => {
            state.loading = true;
         })
         .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
         })
         .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
         .addCase(addContact.pending, state => {
            state.loading = true;
         })
         .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
         })
         .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
         .addCase(deleteContact.pending, state => {
            state.loading = true;
         })
         .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(contact => contact.id !== action.payload);
         })
         .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export default contactsSlice.reducer;
