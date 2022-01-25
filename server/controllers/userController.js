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

  exports.getUser= (req,res) => {
    knex('users')
      .where({username: req.body.username})
      .then((data) => {
        res.status(200).json(data);
        console.log(data);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving users: ${err}`)
      );
  }

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