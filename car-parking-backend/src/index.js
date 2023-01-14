const app = require('./app');
require('dotenv').config();
require('./models');


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Listening to port', port);
});
