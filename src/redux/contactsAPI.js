import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65dad22ebcc50200fcdd389f.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
   const response = await axios.get('/contacts');
   return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async contactData => {
   const response = await axios.post('/contacts', contactData);
   return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async contactId => {
   await axios.delete(`/contacts/${contactId}`);
   return contactId;
});
