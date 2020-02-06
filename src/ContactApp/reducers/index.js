// Combine 'contacts' and 'showPopup' reducers
import { combineReducers } from 'redux';
import searchText from './searchText';
import contacts from './contacts';
import contact from './contact';
import clickedButton from './clickedButton';
import showDialog from './showDialog';
import errors from './errors';

export default combineReducers({
  searchText,
  contacts,
  contact,
  clickedButton,
  showDialog,
  errors,
});
