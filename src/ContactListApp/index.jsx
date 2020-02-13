import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Buttons } from './actions/actionTypes';
import reducer from './reducers';
import { DefaultProfileImg, CONTACTS } from './assets/contactsData';
import App from './components/App';

// Sass
import 'Stylesheets/globals.scss';
import './stylesheets/styles.scss';

const initialState = {
  searchText: '',
  contacts: CONTACTS,
  contact: {
    id: '',
    first: '',
    last: '',
    email: '',
    phone: '',
    photo: DefaultProfileImg,
  },
  clickedButton: Buttons.CANCEL_BUTTON,
  showDialog: false,
  errors: {
    first: '',
    last: '',
    email: '',
    phone: '',
    photo: '',
  },
};

const store = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('ContactApp')
);
