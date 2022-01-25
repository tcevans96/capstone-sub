/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table)=>{
        table.increments('id').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('subscriptions', (table)=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('category').notNullable();
        table.string('logo').notNullable();
        table.float('price').notNullable();
        table.string('renewDate').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users').dropTable('subscriptions');
};
