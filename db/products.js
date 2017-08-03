const pgp = require('pg-promise')();

const { DATABASE, USER, PASSWORD} = require(../config/config.json)

const connectionOptions = {
  host:'localhost',
  port: 5432,
  database: DATABASE,
  user: USER,
  password: PASSWORD
}
const db = pgp(connectionOptions)

function getAllProducts(){
return db.query('SELECT * FROM products')
}

module.exports = {
  getAllProducts: getAllProducts
}
