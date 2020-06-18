module.exports = {
  development: {
    username: "root",
    password: "456852",
    database: "store_dev",
    host: "localhost",
    dialect: "mysql",
    // operatorsAliases: 0
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "store_test",
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: 0
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "store_prod",
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: 0
  }
};
