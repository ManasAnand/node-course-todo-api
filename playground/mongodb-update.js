// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: ObjectID('596e86aff1840e16482d210b')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOrignial: false
  // }).then((result) => {
  //   console.log(result);
  // });

db.collection('Users').findOneAndUpdate({
    _id: ObjectID('596fb485cd124ee2abc1f7f4')
}, {
  $set: {
    name: 'Manas'
  },
  $inc: {
    age: -5
  }
}, {
  returnOrignial: false
}).then((result) => {
  console.log(result);
});
    // db.close();
});
