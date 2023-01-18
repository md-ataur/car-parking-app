const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://dbuser1:9P2AGUUElq70TuhK@cluster0.juclx.mongodb.net/myDBStore?retryWrites=true&w=majority`
);

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Connection error: '));
database.once('open', () => {
  console.log('Database Connected successfully');
});

module.exports = database;
