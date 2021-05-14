// eslint-disable-next-line consistent-return,no-unused-vars
/* function booleanToString(b) {
  if (b === true) {
    return 'true';
  } if (b === false) {
    return 'false';
  }
} */

const booleanToString = (b) => (b === true ? 'true' : 'false');

module.exports = { booleanToString };
