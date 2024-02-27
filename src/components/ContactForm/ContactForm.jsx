import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { addContact } from '../../redux/contactsAPI';

import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = () => {
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         name: '',
         number: '',
      },
      validationSchema: Yup.object({
         name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
         number: Yup.string().required('Required'),
      }),
      onSubmit: (values, actions) => {
         dispatch(addContact(values));
         actions.resetForm();
      },
   });

   return (
      <form className={styles.form} onSubmit={formik.handleSubmit}>
         <div className={styles.wrap}>
            <label htmlFor="name">Name</label>
            <input
               type="text"
               id="name"
               name="name"
               value={formik.values.name}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
               <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
         </div>
         <div className={styles.wrap}>
            <label htmlFor="number">Number</label>
            <input
               type="text"
               id="number"
               name="number"
               value={formik.values.number}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.touched.number && formik.errors.number ? (
               <div className={styles.error}>{formik.errors.number}</div>
            ) : null}
         </div>
         <div className={styles.wrapper}>
            <button className={styles.button} type="submit">
               Add Contact
            </button>
         </div>
      </form>
   );
};

export default ContactForm;
