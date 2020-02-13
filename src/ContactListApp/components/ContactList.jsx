import React from 'react';
import PropTypes from 'prop-types';

import { sortByKey } from 'Utils/utils';
import ContactItem from './ContactItem';

// Create list of contacts
function ContactList({
  searchText,
  contacts,
  setContact,
  setClickedButton,
  setShowDialog,
}) {

  // When buttons inside contact item is clicked: set contact info, get clicked button, and show dialog box
  function handleClick(contact, button) {
    setContact(contact);
    setClickedButton(button);
    setShowDialog(true);
  }

  const sortedContacts = sortByKey(contacts, 'first');
  const contactItems = [];

  sortedContacts.forEach((contact) => {

    let found = true;

    if (searchText) {
      // searchText has value, now check if the name includes search text...
      const name = `${contact.first} ${contact.last}`;

      found = name.toLowerCase().includes(searchText.toLowerCase().trim());
    }

    // Return if contact is found
    if (found) {
      contactItems.push(
        <ContactItem
          key={contact.id}
          contact={contact}
          onClick={handleClick}
        />
      );
    }
  });

  // Return contact list or show not found msg
  return (
    contactItems.length > 0 ? (
      <ul className="ContactList">
        {contactItems}
      </ul>
    ) : (
      <p className="ContactList-not-found">
        Contact not found.
      </p>
    )
  );
}

ContactList.propTypes = {
  searchText: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  setContact: PropTypes.func.isRequired,
  setClickedButton: PropTypes.func.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
  searchText: '',
};

export default ContactList;
