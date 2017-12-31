const {User} = require('./../models/user');

var authenticate = (req, res, next) => {
  // req.header returns the value corresponding to the key that you pass it.
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = {authenticate};
