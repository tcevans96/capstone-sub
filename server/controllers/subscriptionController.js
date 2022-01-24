const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
    knex('subscriptions')
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving subscriptions: ${err}`)
      );
};

exports.cancelSub = (req,res) => {
    knex('subscriptions')
    .delete()
    .where({id: req.params.id})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(400).send(`Error deleting subscription: ${err}`)
      );
};