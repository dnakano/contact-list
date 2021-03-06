// Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

import { SET_POPUP } from './actionTypes';

// Action creators
export const setPopup = (showPopup) => ({
  type: SET_POPUP,
  payload: {
    showPopup,
  },
});
