// HeaderContainer component connects Header component with Redux
import { connect } from 'react-redux';
import {
  editSearch,
  setContact,
  setClickedButton,
  setShowDialog,
} from '../actions';
import Header from './Header';

// Map state to props to pass to Header component
const mapState = ({ searchText }) => ({
  searchText,
});

// Map action creators to dispatch and pass them to Header component
const mapDispatch = {
  editSearch,
  setContact,
  setClickedButton,
  setShowDialog,
};

export default connect(
  mapState,
  mapDispatch
)(Header);
