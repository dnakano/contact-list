import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../actions/actionTypes';

// Create each contact's item
function ContactItem({
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
    <li className="ContactItem">

      <div className="ContactItem-photo">
        <img
          src={photo}
          alt={name}
          title={name}
        />
      </div>

      <div className="ContactItem-summary">
        <div className="ContactItem-name">
          <span className="capitalize">{name}</span>
        </div>

        <div className="ContactItem-email-phone">
          <span><b>Email:</b> <a href="#">{email}</a></span>
          <span><b>Phone:</b> {phone}</span>
        </div>
      </div>

      <div className="ContactItem-buttons">
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

ContactItem.propTypes = {
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

export default ContactItem;
