// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.')
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });
    // db.close();

    // db.collection('Users').deleteMany({name: 'Manas'}).then((results) => {
    //   console.log(results);
    // });

    db.collection('Users').findOneAndDelete({_id: ObjectID("596fb43dcd124ee2abc1f7dc")}).then((results) => {
      console.log(results);
    })
    // db.close();
});
