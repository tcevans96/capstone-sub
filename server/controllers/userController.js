const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {

    knex('users')
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving users: ${err}`)
      );
  };

  exports.newUser = (req,res) => {

    const {firstName, lastName, username, password} = req.body

    if (!firstName || !lastName || !username || !password) {
      return res.status(400).send("Please enter the required fields.");
    }

    knex('users')
    .insert(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error creating user: ${err}`));

  };

  exports.userSubs = (req,res) => {
    knex('user_subs')
    .insert(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error adding subscription: ${err}`));
  };

  exports.subIndex = (_req,res) => {


  };
