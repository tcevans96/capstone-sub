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

  exports.subIndex = (req,res) => {
    knex('user_subs')
    .where('user_id', req.params.userId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error getting subscription: ${err}`));
  };

  exports.cancelSub = (req,res) => {
    console.log(req.body);

    knex('user_subs')
    .where('name', req.params.name)
    .del()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error cancelling subscription: ${err}`));
  };


  exports.getSub = (req,res) => {

    knex('user_subs')
    .where('name', req.params.name)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error getting subscription details: ${err}`));
  }