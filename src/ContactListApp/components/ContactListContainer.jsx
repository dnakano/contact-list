// ContactListContainer component connects ContactList component with Redux
import { connect } from 'react-redux';
import {
  setContact,
  setClickedButton,
  setShowDialog,
} from '../actions';
import ContactList from './ContactList';

// Map state to props to pass to wrapped component
const mapState = ({ searchText, contacts }) => ({
  searchText,
  contacts,
});

// Map action creators to dispatch and pass them to wrapped component
const mapDispatch = {
  setContact,
  setClickedButton,
  setShowDialog,
};

export default connect(
  mapState,
  mapDispatch
)(ContactList);
