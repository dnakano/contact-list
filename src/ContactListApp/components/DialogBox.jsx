import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../actions/actionTypes';
import { DefaultProfileImg } from '../assets/contactsData';
import GenericPanel from 'Components/GenericPanel';
import DialogButtons from './DialogButtons';
import DialogForm from './DialogForm';
import { capitalize } from 'Utils/utils';

function DialogBox({
  contacts,
  contact,
  clickedButton,
  showDialog,
  errors,
  editContact,
  addContact,
  updateContact,
  deleteContact,
  setContact,
  setClickedButton,
  setShowDialog,
  setErrors,
}) {

  // Reset state
  function reset() {
    setContact({
      id: '',
      first: '',
      last: '',
      email: '',
      phone: '',
      photo: DefaultProfileImg,
    });
    setClickedButton(Buttons.CANCEL_BUTTON);
    setShowDialog(false);
    setErrors({
      first: '',
      last: '',
      email: '',
      phone: '',
      photo: '',
    });
  }

  // Validate name. They cannot be empty and no numbers
  function validateName(value) {
    const digits = /^\d+$/giu;

    if (!value) {
      return 'Name field is required';
    }

    if (digits.test(value)) {
      return 'Name field cannot be number';
    }

    return '';
  }

  // Validate email
  function validateEmail(id, email) {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/u;

    // Validate format
    if (email && !emailRegExp.test(email)) {
      return 'Invalid email format. E.g. <i>you@email.com</i>';
    }

    // If email field is not empty...
    if (email) {
      // ...make sure email is unique
      for (const contact of contacts) {
        if (id !== contact.id && email === contact.email) {
          return `<b>${email}</b> already exists in contact`;
        }
      }
    }

    return '';
  }

  // Validate phone number. Only digits allowed and can't be more than 10 digits.
  function validatePhone(value) {
    const digits = /^\d+$/giu;

    if (value && !digits.test(value)) {
      return 'Phone number can only contain digits';
    }

    if (value.length > 10) {
      return 'Phone number can only contain up to 10 digits';
    }

    return '';
  }

  // Validate photo
  function isValidPhoto(files) {
    const MAX_PHOTO = 1;

    // Make sure photo is present and there's only 1 photo
    if (!files || files.length !== MAX_PHOTO) {
      return false;
    }

    // Make sure file is a photo
    return files[0].type.startsWith('image/');
  }

  function validateInputs(id, first, last, email, phone) {
    const errors = {
      first: '',
      last: '',
      email: '',
      phone: '',
      photo: '',
    };

    errors.first = validateName(first);
    errors.last = validateName(last);
    errors.email = validateEmail(id, email);
    errors.phone = validatePhone(phone);

    setErrors(errors);

    // Errors found
    if (errors.first || errors.last || errors.email || errors.phone) {
      return false;
    }

    return true;
  }

  // Event handler for dialog form input change
  function handleChange({ target }) {
    const { name, value, files } = target;
    const { photo } = contact;

    // For photo, set to previous/default image
    let tempVal = name === 'photo' ? photo : value;

    // For photo input, make sure it's a valid file
    if (name === 'photo' && isValidPhoto(files)) {
      // It's valid image file so adjust style & setting

      // Hide label text
      const label = document.querySelector('.DialogForm-photo label');

      label.style.opacity = 0;

      // Set new profile image
      tempVal = window.URL.createObjectURL(files[0]);
    }

    editContact(name, tempVal);
  }

  // Create id for new contact
  function createId(first='', last='') {

    // Generate ID (LastFirstNum) using generator function
    function* idGenerator() {
      let cnt = 0;

      while (true) {
        yield `${last}${first}${cnt}`;
        cnt += 1;
      }
    }

    if (!first || !last) {
      return undefined;
    }

    // Get ID from generator function and iterate until unique ID is created
    for (const id of idGenerator()) {
      let notFound = true;

      // Check if ID already exists in contacts list
      for (const contact of contacts) {
        // ID already exists, break from the loop
        if (contact.id === id.toLowerCase()) {
          notFound = false;
          break;
        }
      }

      // ID is unique, return it
      if (notFound) {
        return id.toLowerCase();
      }
    }
  }

  function handleSaveClick() {
    const id = contact.id.trim();
    const first = contact.first.trim();
    const last = contact.last.trim();
    const email = contact.email.trim().toLowerCase();
    const phone = contact.phone.trim();
    const photo = contact.photo.trim();
    const isAdd = clickedButton === Buttons.ADD_BUTTON;
    const isValid = validateInputs(id, first, last, email, phone);

    if (isValid) {
      // Set up contact info
      const tempContact = {
        id: isAdd ? createId(first, last) : id,
        first: capitalize(first.toLowerCase()),
        last: capitalize(last.toLowerCase()),
        email: email ? email.toLowerCase() : '',
        phone: phone ? phone : '',
        photo,
      };

      isAdd ? addContact(tempContact) : updateContact(tempContact);
      reset();
    }
  }

  // Delete contact
  function handleDeleteClick() {
    const { id } = contact;

    deleteContact(id);
    reset();
  }

  // Reset states
  function handleResetClick() {
    reset();
  }

  const { first, last } = contact;

  const isAdd = clickedButton === Buttons.ADD_BUTTON;
  const isDelete = clickedButton === Buttons.DELETE_BUTTON;

  // Set up dialog box variables. Default is for edit contact
  let msg = 'Edit contact';

  if (isAdd) {
    msg = 'Add contact';
  }

  if (isDelete) {
    msg = `Delete ${first} ${last}?`;
  }

  // If showDialog flag is false, hide dialog box
  if (!showDialog) {
    return null;
  }

  return (
    <GenericPanel
      heading={msg}
      onResetClick={handleResetClick}
    >
      {
        isDelete ? (
          <DialogButtons
            buttonName="Delete"
            buttonTitle="Delete contact"
            buttonClassName="DialogButtons-warn"
            onClick={handleDeleteClick}
            onResetClick={handleResetClick}
          />
        ) : (
          <DialogForm
            contact={contact}
            isAdd={isAdd}
            onChange={handleChange}
            onClick={handleSaveClick}
            onResetClick={handleResetClick}
            errors={errors}
          />
        )
      }
    </GenericPanel>
  );
}

DialogBox.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  clickedButton: PropTypes.string.isRequired,
  showDialog: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  editContact: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  setContact: PropTypes.func.isRequired,
  setClickedButton: PropTypes.func.isRequired,
  setShowDialog: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
};

export default DialogBox;
