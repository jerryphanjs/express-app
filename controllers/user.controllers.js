const db = require('../db');
const users = db.get('users');
const shortid = require('shortid');

module.exports.index = (req, res) => res.render('users/index', { users: users.value() });
module.exports.search = (req, res) => {
  const q = req.query.q;
  const matchUser = users.value().filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
  res.render('users/index', { users: matchUser });
}
module.exports.create = (req, res) => res.render('users/createUser');
module.exports.postCreate = (req, res) => {
  req.body.id = shortid.generate();
  const errors = [];
  if(!req.body.name) {
    errors.push('Name is required.');
  }
  if(!req.body.phone) {
    errors.push('Phone is required.');
  }
  if(errors.length) {
    res.render('users/createUser', {
      errors: errors,
      values: req.body
    });
    return;
  }
  users.push(req.body).write();
  res.redirect('/users');
}
module.exports.view = (req, res) => {
  const id = req.params.id;
  const user = users.find({ id : id }).value();
  res.render('users/view', {
    user: user
  });
}