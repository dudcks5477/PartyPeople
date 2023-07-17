const mongoose = require('mongoose');

function initializeDB() {
  mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));
}

module.exports = initializeDB;