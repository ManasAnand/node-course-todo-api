var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    reqired: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {User}
