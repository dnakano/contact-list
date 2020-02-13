// Reducer for searchText state
import {
  EDIT_SEARCH,
} from '../actions/actionTypes';

export default (state = '', action) => {
  switch (action.type) {
    case EDIT_SEARCH:
      return action.payload.searchText;
    default:
      return state;
  }
};
