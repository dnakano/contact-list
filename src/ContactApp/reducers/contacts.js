// Reducer for contacts state
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from '../actions/actionTypes';

// Add new contact
const addContact = (state, action) => ([...state, action.payload.contact]);

// Update contact
const updateContact = (state, action) => {
  const { contact } = action.payload;

  return state.map((el) => ((el.id === contact.id) ? { ...el, ...contact } : el));
};

// Delete contact
const deleteContact = (state, action) => (
  state.filter((el) => el.id.toLowerCase() !== action.payload.id.toLowerCase())
);

// Handle contacts state
export default (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return addContact(state, action);
    case UPDATE_CONTACT:
      return updateContact(state, action);
    case DELETE_CONTACT:
      return deleteContact(state, action);
    default:
      return state;
  }
};
