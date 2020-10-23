
exports.up = function (knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id');
        t.string('username');
        t.string('email');
    }).createTable('pumpkins', t => {
        t.increments('id');
        t.string('name');
        t.string('img');
        t.integer('user_id').unsigned();
        t.foreign('user_id').references('users.id');
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('pumpkins')
        .dropTable('users');
};
