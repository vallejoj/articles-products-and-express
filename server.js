/*jshint esversion: 6 */
var products = require('./routes/products.js');
var articles = require('./routes/articles.js');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.envPORT || 3000;
const bp = require('body-parser');
const methodOverride = require('method-override');
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use('/css', express.static('css'));
// app.use(methodOverride('X-HTTP-Method-Override'));
// app.use(methodOverride(function (req, res) {
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     // look in urlencoded POST bodies and delete it
//     var method = req.body._method
//     delete req.body._method
//     return method
//   }
// }));
app.use(methodOverride('_method'));
app.use('/products', products);
app.use('/articles', articles);
const server = app.listen(PORT, () =>{
  console.log(`Running on ${PORT}`);
});
