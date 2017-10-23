// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// // ES6 object destructuring: "a fantastic way to make new variables from an object's properties."
// var user = {name: 'Sophia', age: 24};
// var {name} = user;
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

// Creating new database called ToDoApp. Could use test (default db)
// connecting to it creates it, no need to create it separately.
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    // using return to end script. Andrew prefers this to an else.
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to mongoDB server');

  // as with the databases, to create a collection, simply give a collection a name and insert into it. No need to run a separate command to create it.
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    // _id: 123,
    // so you can actually set your document _id attribute to whatever you like (I assume it has to be unique..). MongoDB's ObjectID property is mongo's default way of setting document _ids, which it'll use if you don't set one yourself.
    name: 'Sophia',
    age: 24,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    // result.ops returns an array of the inserted documents
    // console.log(JSON.stringify(result.ops, undefined, 2));
    // Note that a timestamp is embedded inside the ObjectID!
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
