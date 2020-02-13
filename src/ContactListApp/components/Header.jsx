import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../actions/actionTypes';
import { DefaultProfileImg } from '../assets/contactsData';

// Search bar and 'add' button
function Header({
  searchText,
  editSearch,
  setContact,
  setClickedButton,
  setShowDialog,
}) {

  // When search input text changes...
  function handleChange({ target }) {
    editSearch(target.value);
  }

  // When add button is clicked... reset contact, set clicked button, and show dialog box
  function handleClick(evt) {
    const button = evt.target.name;

    setContact({
      id: '',
      first: '',
      last: '',
      email: '',
      phone: '',
      photo: DefaultProfileImg,
    });
    setClickedButton(button);
    setShowDialog(true);
  }

  return (
    <form className="Header">
      <label htmlFor="searchBox">Search</label>

      <input
        type="search"
        id="searchBox"
        name="searchBox"
        placeholder="Search contact"
        value={searchText}
        onChange={handleChange}
      />

      <button
        type="button"
        name={Buttons.ADD_BUTTON}
        title="Add contact"
        onClick={handleClick}
      >
        Add
      </button>

    </form>
  );
}

Header.propTypes = {
  searchText: PropTypes.string,
  editSearch: PropTypes.func.isRequired,
  setContact: PropTypes.func.isRequired,
  setClickedButton: PropTypes.func.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};

Header.defaultProps = {
  searchText: '',
};

export default Header;
