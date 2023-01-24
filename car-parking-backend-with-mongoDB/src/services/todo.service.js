const todos = [
  { id: 1, name: 'John Doe', completed: false },
  { id: 2, name: 'Maria Doe', completed: true }
];

const getTodos = () => {
  if (todos) {
    return todos;
  }
};

module.exports = {
  getTodos
};
