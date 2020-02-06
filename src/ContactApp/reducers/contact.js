// Reducer for contact state
import {
  EDIT_CONTACT,
  SET_CONTACT,
} from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EDIT_CONTACT:
      return { ...state, ...action.payload };
    case SET_CONTACT:
      return { ...state, ...action.payload.contact };
    default:
      return state;
  }
};
