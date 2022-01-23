/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const subscriptionData = require('../seed_data/subscriptions');
const userData = require('../seed_data/users');

exports.seed = function(knex) {
  return knex('subscriptions')
    .del()
    .then(function () {
      return knex('subscriptions').insert(subscriptionData);
    })
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('users').insert(userData);
    });
};
