// Util functions that are used globally

// Regular expression for non-numbers
export const REGEX_ALPHA = /[^\d]/u;

// Check if value is an integer
export const isInteger = (value) => (
  !(REGEX_ALPHA.test(value) || Number.isNaN(value))
);

// Make sure value is a valid number
export const isValidNumber = (value) => (
  (isInteger(value) && value !== '0' && value !== '')
);

// Remove leading '0' from value
export const removeLeadingZero = (value) => (
  (value.length > 1 && value.charAt() === '0') ? value.slice(1) : value
);

// Format price: $##.##
export const formatPrice = (price) => {
  const tlsOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  };

  return (
    (Number.isNaN(price) || price === '') ? '0' : parseFloat(price).toLocaleString(undefined, tlsOptions)
  );
};

// Sort list by 'key'
export const sortByKey = (array=[], key='') => {
  const list = [...array];

  return list.sort((a, b) => {
    let ret = 0;

    if (typeof a[key] !== 'undefined' && typeof b[key] !== 'undefined') {
      // Make sure 'key' is valid
      const x = a[key].toUpperCase();
      const y = b[key].toUpperCase();

      if (x < y) {
        ret = -1;
      } else if (x > y) {
        ret = 1;
      } else {
        ret = 0;
      }
    }

    return ret;
  });
};

// Capitalize first letters of a string
export const capitalize = (str) => {
  const line = str.split(' ');

  const words = line.map((el) => el.charAt(0).toUpperCase() + el.slice(1));

  return words.join(' ');
};

// Create innerHTML text
export const createMarkup = (markUp) => ({ __html: markUp });
