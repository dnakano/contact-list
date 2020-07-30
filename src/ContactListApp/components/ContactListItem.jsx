import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../actions/actionTypes';

// Create each contact's item
function ContactListItem({
  contact,
  onClick,
}) {

  // Get the name of clicked button and call onClick() prop
  function handleClick(evt) {
    const button = evt.target.name;

    onClick(contact, button);
  }

  const { first, last, email, phone, photo } = contact;
  const name = `${first} ${last}`;

  return (
    <li className="ContactListItem">

      <div className="ContactListItem-photo">
        <img
          src={photo}
          alt={name}
          title={name}
        />
      </div>

      <div className="ContactListItem-summary">
        <div className="ContactListItem-name">
          <span className="capitalize">{name}</span>
        </div>

        <div className="ContactListItem-email-phone">
          <span><b>Email:</b> <a href="#">{email}</a></span>
          <span><b>Phone:</b> {phone}</span>
        </div>
      </div>

      <div className="ContactListItem-buttons">
        <button
          type="button"
          name={Buttons.EDIT_BUTTON}
          title="Edit contact"
          onClick={handleClick}
        >
          Edit
        </button>

        <button
          type="button"
          name={Buttons.DELETE_BUTTON}
          title="Delete contact"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>

    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
