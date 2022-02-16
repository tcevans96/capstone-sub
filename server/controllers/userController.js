const knex = require('knex')(require('../knexfile').development);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create the new user
    const newUser = {
        ...req.body,
        password: hashedPassword
    };

    knex('users')
    .insert(newUser)
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

  exports.login = (req,res) => {
    const {username, password} = req.body;
    console.log('login attempted')

    knex('users')
      .where({username: username})
      .first()
      .then((user)=>{
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).send("Invalid password");
        }

        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.JWT_KEY,
          { expiresIn: "24h" }
      );

      res.json({ token });
      })
  };

  exports.currentUser = (req,res) => {
    if (!req.headers.authorization) {
      return res.status(401).send("Please login");
  }

  // Parse the Bearer token
  const authToken = req.headers.authorization.split(" ")[1];
  
  // Verify the token
  jwt.verify(authToken, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
          return res.status(401).send("Invalid auth token");
      } 

      knex('users')
          .where({ username: decoded.username })
          .first()
          .then((user) => {
              // Respond with the user data
              delete user.password;
              res.json(user);
          });
  }); 
  };