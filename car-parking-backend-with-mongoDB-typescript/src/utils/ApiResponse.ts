/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} results
 * @param   {number} statusCode
 */
export const success = (data = {}, message: string = "") => ({
  success: true,
  message,
  data,
  error: {
    status: false,
    code: 0,
    message: "No Error",
  },
});

/**
 * @desc    Send any error response
 *
 * @param   {string} message
 * @param   {number} statusCode
 */
export const error = (message: string = "") => ({
  success: false,
  message,
  data: {},
  error: {
    status: true,
  },
});
