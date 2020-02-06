import React from 'react';
import PropTypes from 'prop-types';

// Create generic buttons
function DialogButtons({
  buttonName,
  buttonTitle,
  buttonClassName,
  onClick,
  onResetClick,
}) {
  return (
    <div className="DialogButtons">
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
        className="DialogButtons-cancel"
        onClick={onResetClick}
      >
        Cancel
      </button>
    </div>
  );
}

DialogButtons.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
  buttonClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

DialogButtons.defaultProps = {
  buttonTitle: '',
  buttonClassName: '',
};

export default DialogButtons;
