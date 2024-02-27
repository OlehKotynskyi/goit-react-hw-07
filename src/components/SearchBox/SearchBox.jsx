import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
   const dispatch = useDispatch();
   const filterValue = useSelector(state => state.filters.name);

   const handleChange = event => {
      dispatch(setNameFilter(event.target.value));
   };

   return (
      <div className={styles.searchBox}>
         <label htmlFor="search">Find contacts by name</label>
         <input
            type="text"
            id="search"
            value={filterValue}
            onChange={handleChange}
            placeholder="Enter name..."
         />
      </div>
   );
};

export default SearchBox;
