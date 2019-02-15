global.mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testApp3')
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
