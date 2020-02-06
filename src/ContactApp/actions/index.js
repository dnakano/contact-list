// Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
import {
  EDIT_SEARCH,
  EDIT_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  SET_CLICKED_BUTTON,
  SET_SHOW_DIALOG,
  SET_ERRORS,
} from './actionTypes';

// Action creators: In Redux, action creators simply return an action
export const editSearch = (searchText) => ({
  type: EDIT_SEARCH,
  payload: {
    searchText,
  },
});

export const editContact = (name, value) => ({
  type: EDIT_CONTACT,
  payload: {
    [name]: value,
  },
});

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: {
    contact,
  },
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: {
    contact,
  },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: {
    id,
  },
});

export const setContact = (contact) => ({
  type: SET_CONTACT,
  payload: {
    contact,
  },
});

// Set and return clickedButton
export const setClickedButton = (clickedButton) => ({
  type: SET_CLICKED_BUTTON,
  payload: {
    clickedButton,
  },
});

// Set and return showDialog
export const setShowDialog = (showDialog) => ({
  type: SET_SHOW_DIALOG,
  payload: {
    showDialog,
  },
});

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: {
    errors,
  },
});
