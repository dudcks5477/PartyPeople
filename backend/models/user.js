const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  name: {
    type: String
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;