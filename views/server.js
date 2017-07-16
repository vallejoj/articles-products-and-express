/*jshint esversion 6*/

const express = require('express');
const exphbs = require('express-handlebars');
// const products = require('./routes/product.js');
// const articles = require('./routes/articles.js');

const app = express();
const PORT = process.envPORT || 3000;


const server = app.listen(PORT, () =>{
  console.log(`Running on ${PORT}`)
});
