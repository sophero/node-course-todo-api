const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to mongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: "Eat lunch"
  // }).then((result) => {
  //   console.log(result);
  // // the result attribute of the promise return gives the number of records deleted, and 1 as the success code.
  // });

  // deleteOne
  // like deleteMany but stops after deleting first doc matching criteria.
  // db.collection('Todos').deleteOne({ text: "Eat lunch" }).then((result) => {
  //   console.log(result);
  //
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({ name: 'Jem' });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("59ee67201934fa9b0517ed9e")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});
