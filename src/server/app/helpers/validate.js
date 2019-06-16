var validator = require('email-validator');

module.exports = {
  'validateEmail' : function (email) {
    return validator.validate(email);
  }
  ,
  'validatePassword' : function (password) {
    return password.match(/([a-z].*[a-z])/) && password.length > 4;
  }
};
