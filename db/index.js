const pgp = require('pg-promise')();

const { DATABASE, USER, PASSWORD} = require('../config/config')

const connectionOptions = {
  host:'localhost',
  port: 3000,
  database: DATABASE,
  user: USER,
  password: PASSWORD
}
const db = pgp(connectionOptions)



module.exports = db
