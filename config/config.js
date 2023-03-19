const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("rdsTest", "admin", "ajayjamage123", {
  host: "database-1.cqq1eplgwh9o.ap-south-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };
