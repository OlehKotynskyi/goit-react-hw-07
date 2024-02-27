import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contactsAPI';
import Contact from '../Contact/Contact';
import {
   selectFilteredContacts,
   selectContactsLoading,
   selectContactsError,
} from '../../redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
   const dispatch = useDispatch();
   const filteredContacts = useSelector(selectFilteredContacts);
   const loading = useSelector(selectContactsLoading);
   const error = useSelector(selectContactsError);
   const [isDeleting, setIsDeleting] = useState(false);

   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   const handleDeleteContact = contactId => {
      setIsDeleting(true);
      dispatch(deleteContact(contactId)).then(() => {
         setIsDeleting(false);
      });
   };

   return (
      <div>
         {loading && !isDeleting ? (
            <div>Loading...</div>
         ) : error ? (
            <div>Error: {error}</div>
         ) : (
            <ul className={css.list}>
               {filteredContacts.map(contact => (
                  <Contact key={contact.id} contact={contact} onDelete={handleDeleteContact} />
               ))}
            </ul>
         )}
      </div>
   );
};

export default ContactList;
