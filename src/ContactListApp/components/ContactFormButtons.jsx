import React from 'react';
import PropTypes from 'prop-types';

// Create generic buttons
function ContactFormButtons({
  buttonName,
  buttonTitle,
  buttonClassName,
  onClick,
  onResetClick,
}) {
  return (
    <div className="ContactFormButtons">
      <button
        type="button"
        title={buttonTitle ? buttonTitle : ''}
        className={buttonClassName ? buttonClassName : ''}
        onClick={onClick}
      >
        {buttonName}
      </button>

      <button
        type="button"
        title="Cancel"
        className="ContactFormButtons-cancel"
        onClick={onResetClick}
      >
        Cancel
      </button>
    </div>
  );
}

ContactFormButtons.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
  buttonClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

ContactFormButtons.defaultProps = {
  buttonTitle: '',
  buttonClassName: '',
};

export default ContactFormButtons;
