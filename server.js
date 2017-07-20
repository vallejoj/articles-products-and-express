/*jshint esversion: 6 */
const express = require('express');
const exphbs = require('express-handlebars');
var products = require('./routes/products.js');
var articles = require('./routes/articles.js');
const app = express();
const PORT = process.envPORT || 3000;
const bp = require('body-parser');
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bp.urlencoded())
app.use('/products', products);
app.use('/articles', articles);

const server = app.listen(PORT, () =>{
  console.log(`Running on ${PORT}`);
});
