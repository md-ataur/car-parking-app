require('dotenv').config();
// require('./config/sequelize.config');
require('./models');
const app = require('./app');


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Listening to port', port);
});
