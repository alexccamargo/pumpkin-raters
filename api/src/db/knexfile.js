module.exports = {

  development: {
    client: 'mysql',
    connection: 'mysql://root:password@localhost/pumpkin',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
  }

};
