// Reducer for contact state
import {
  SET_ERRORS,
} from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return { ...state, ...action.payload.errors };
    default:
      return state;
  }
};
