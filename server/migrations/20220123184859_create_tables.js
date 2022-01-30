
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table)=>{
        table.increments('id').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('subscriptions', (table)=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('category').notNullable();
        table.string('logo').notNullable();
        table.float('price').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('user_subs', (table)=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('category').notNullable();
        table.string('logo').notNullable();
        table.float('price').notNullable();
        table.string('renewDate').notNullable();
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('users').dropTable('subscriptions').dropTable('user_subs');
};
