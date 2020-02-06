// Reducer for clickedButton state
import {
  SET_CLICKED_BUTTON,
  Buttons,
} from '../actions/actionTypes';

export default (state = Buttons.CANCEL_BUTTON, action) => {
  switch (action.type) {
    case SET_CLICKED_BUTTON:
      return action.payload.clickedButton;
    default:
      return state;
  }
};
