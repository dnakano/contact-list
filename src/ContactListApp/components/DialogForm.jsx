import ErrorMessage from 'Components/ErrorMessage';
import PropTypes from 'prop-types';
import React from 'react';
import DialogButtons from './DialogButtons';

// Render Add / Edit dialog form
function DialogForm({
  contact,
  isAdd,
  onChange,
  onClick,
  onResetClick,
  errors,
}) {

  const { first, last, email, phone, photo } = contact;

  return (
    <form className="DialogForm-form" noValidate>

      <div className="DialogForm-photo">
        <div>
          <label htmlFor="photo" className={isAdd ? '' : 'hide'}>Upload profile photo</label>

          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={onChange}
            title="Upload profile photo"
          />

          <img src={photo} alt="Profile" />
        </div>
      </div>

      <div className="DialogForm-detail">
        <div>
          <label htmlFor="first">
            First Name<abbr title="This field is mandatory">*</abbr>
          </label>

          <input
            type="text"
            id="first"
            name="first"
            placeholder="First name*"
            value={first}
            onChange={onChange}
            className={errors.first.length > 0 ? 'errorInput' : ''}
            required
          />

          {
            errors.first.length > 0 && <ErrorMessage message={errors.first} />
          }
        </div>

        <div>
          <label htmlFor="last">
            Last Name<abbr title="This field is mandatory">*</abbr>
          </label>

          <input
            type="text"
            id="last"
            name="last"
            placeholder="Last name*"
            value={last}
            onChange={onChange}
            className={errors.last.length > 0 ? 'errorInput' : ''}
            required
          />

          {
            errors.last.length > 0 && <ErrorMessage message={errors.last} />
          }
        </div>

        <div>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email (e.g. you@xyz.com)"
            value={email}
            onChange={onChange}
            title="Sample email address: you@email.com"
            className={errors.email.length > 0 ? 'errorInput' : ''}
          />

          {
            errors.email.length > 0 && <ErrorMessage message={errors.email} />
          }
        </div>

        <div>
          <label htmlFor="phone">Phone</label>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone (10 digits, no country code)"
            value={phone}
            onChange={onChange}
            maxLength="10"
            className={errors.phone.length > 0 ? 'errorInput' : ''}
          />

          {
            errors.phone.length > 0 && <ErrorMessage message={errors.phone} />
          }
        </div>
      </div>

      <p className="DialogForm-footnote">
        <abbr>*</abbr> indicates required field
      </p>

      <DialogButtons
        buttonName="Save"
        buttonTitle="Save contact"
        buttonClassName="DialogButtons-save"
        onClick={onClick}
        onResetClick={onResetClick}
      />

    </form>

  );
}

DialogForm.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  isAdd: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

DialogForm.defaultProps = {
  isAdd: false,
};

export default DialogForm;
