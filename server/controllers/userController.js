const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
    knex('users')
      .select('firstName', 'lastName', 'username')
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving subscriptions: ${err}`)
      );
  };

  exports.newUser = (req,res) => {
    knex('users')
    .insert(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error creating user: ${err}`));
  };