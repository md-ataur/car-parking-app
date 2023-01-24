const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/vehilces_db`);

/* mongoose.connect(
  `mongodb+srv://dbuser1:9P2AGUUElq70TuhK@cluster0.juclx.mongodb.net/myDBStore?retryWrites=true&w=majority`
); */

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Connection error: '));
database.once('open', () => {
  console.log('Database connected successfully');
});

module.exports = database;
