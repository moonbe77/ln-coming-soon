const db = require("../models");

const database = db.sequelize.sync({ alter: true });

export default database;
