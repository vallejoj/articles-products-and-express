const pgp = require('pg-promise')();


const { DATABASE, USER, PASSWORD} = require(../config/config.json)

const connectionOptions = {
  host:'localhost',
  port: 3000,
  database: DATABASE,
  user: USER,
  password: PASSWORD
}
const db = pgp(connectionOptions)

function getAllArticles(){
return db.query('SELECT * FROM articles')
}

module.exports = {
  getAllArticles: getAllArticles
}
