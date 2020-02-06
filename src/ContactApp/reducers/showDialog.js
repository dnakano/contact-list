// Reducer for showDialog state
import { SET_SHOW_DIALOG } from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case SET_SHOW_DIALOG:
      return action.payload.showDialog;
    default:
      return state;
  }
};
