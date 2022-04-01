const dbConfig = require('../../config/dbConfig');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      operatorsAliases: false,

      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
    })

sequelize.authenticate()
.then(() => {
  console.log('connected to db')
}).catch((err) => {
  console.log('Error', err);
})

const db = {};

db.sequelize = Sequelize;
db.sequelize = sequelize;

db.issues = require('./issueModel')(sequelize, DataTypes);
db.agents = require('./agentModel')(sequelize, DataTypes);

db.sequelize.sync({force: false})
.then(() => console.log('Re-sync done'))

module.exports = db;