import { FaPhone } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
   return (
      <li className={styles.contact}>
         <p className={styles.text}>
            <span className={styles.icon}>
               <IoMdContact />
            </span>
            Name: {contact.name}
         </p>
         <p className={styles.text}>
            <span className={styles.icon}>
               <FaPhone />
            </span>
            Number: {contact.phone}
         </p>
         <button className={styles.button} onClick={() => onDelete(contact.id)}>
            Delete
         </button>
      </li>
   );
};

export default Contact;
