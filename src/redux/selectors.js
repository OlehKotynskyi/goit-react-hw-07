import { createSelector } from '@reduxjs/toolkit';

export const selectNameFilter = state => state.filters.name.toLowerCase();

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
   [selectNameFilter, selectContacts],
   (nameFilter, contacts) => {
      return contacts.filter(({ name }) => name.toLowerCase().includes(nameFilter));
   }
);

export const selectContactsLoading = state => state.contacts.loading;

export const selectContactsError = state => state.contacts.error;
