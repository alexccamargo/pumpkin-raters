
exports.up = function (knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id');
        t.string('username');
        t.string('email').unique();
    }).createTable('pumpkins', t => {
        t.increments('id');
        t.string('name');
        t.string('img');
        t.integer('userId').unsigned();
        t.foreign('userId').references('users.id');
    }).createTable('rates', t => {
        t.integer('rate').unsigned();
        t.integer('userId').unsigned();
        t.integer('pumpkinId').unsigned();
        t.primary(['userId', 'pumpkinId']);
        t.foreign('pumpkinId').references('pumpkins.id');
        t.foreign('userId').references('users.id');
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('rates')
        .dropTable('pumpkins')
        .dropTable('users');
};
