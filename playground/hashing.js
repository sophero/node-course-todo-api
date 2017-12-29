const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Using bcryptjs:
var password = '123abc';

// Generating hash. Salting is built into bcrypt so no need to store salt on server.
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$RBP8O.vws2kqcEJSBB9qYeTQtXyTQYtJeZboo/9BlLeL3e07cVOiG';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res); // response variable: Boolean for pw match
});



// // Testing with jsonwebtoken:
// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('Decoded:', decoded);

// // Using crypto-js:
// var message = "I am user number 4";
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'some secret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'some secret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }