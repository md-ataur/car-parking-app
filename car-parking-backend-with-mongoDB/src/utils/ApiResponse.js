const errorCode = require('./ErrorCodes');

/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} results
 * @param   {number} statusCode
 */
const success = (data = {}, message = '') => ({
  success: true,
  message,
  data,
  error: {
    status: false,
    code: 0,
    message: 'No Error'
  }
});

/**
 * @desc    Send any error response
 *
 * @param   {string} message
 * @param   {number} statusCode
 */
const error = (message = '', code) => ({
  success: false,
  message,
  data: {},
  error: {
    status: true,
    code,
    message: errorCode[code.toString()]
  }
});

module.exports = {
  success,
  error
};
