// ContactDialogContainer component connects ContactDialog component with Redux
import { connect } from 'react-redux';
import {
  editContact,
  addContact,
  updateContact,
  deleteContact,
  setContact,
  setClickedButton,
  setShowDialog,
  setErrors,
} from '../actions';
import ContactDialog from './ContactDialog';

// Map state to props to pass to wrapped component
const mapState = ({
  contacts,
  contact,
  clickedButton,
  showDialog,
  errors,
}) => ({
  contacts,
  contact,
  clickedButton,
  showDialog,
  errors,
});

// Action creators to dispatch
const mapDispatch = {
  editContact,
  addContact,
  updateContact,
  deleteContact,
  setContact,
  setClickedButton,
  setShowDialog,
  setErrors,
};

export default connect(
  mapState,
  mapDispatch
)(ContactDialog);
