/*jshint esversion: 6 */
const express = require('express');
const exphbs = require('express-handlebars');
var products = require('./routes/products.js');
var articles = require('./routes/articles.js');
const app = express();
const PORT = process.envPORT || 3000;

//console.log(products);
app.use('/products', products);
app.use('/articles', articles);



















const server = app.listen(PORT, () =>{
  console.log(`Running on ${PORT}`);
});
