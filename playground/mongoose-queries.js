const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '597003313dcdf8182ebc7463';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }
// Todo.find({
//   _id:id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
// Todo.findById(id).then((todo) => {
//   console.log('Todo find by id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
if (!user) {
  console.log('User not found.')
}
  console.log('User found', user)
}, (e) => {
  console.log(e);
});
