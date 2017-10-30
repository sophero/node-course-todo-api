const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// // Removes all documents. Note empty object argument.
// Todo.remove({}).then((result) => {
//   console.log(result); // returns number of documents removed.
// });

// // Returns removed document.
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59f779b61934fa9b0518408c'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('59f779b61934fa9b0518408c').then((todo) => {
  console.log(todo);
});
