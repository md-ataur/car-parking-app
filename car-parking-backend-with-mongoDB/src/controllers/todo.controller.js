const httpStatus = require('http-status');
const { todoService } = require('../services');
const { success, error } = require('../utils/ApiResponse');

const getTodos = (req, res) => {
  const data = todoService.getTodos(req.body);
  res.status(httpStatus.OK).send(success(data, 'Todos found successfully'));
};

module.exports = {
  getTodos
};
