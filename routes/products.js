/*jshint esversion: 6 */
const express = require('express');
//const exphbs = require('express-handlebars');
const router = express.Router();
const app = express();






// /products
//GET, POST

router.route('/')
  .get((req, res) => {
    console.log('this is products');
  });


// /products/:id
//GET, DELETE, PUT

// /products/:id/edit
//GET

// /products/new
//GET
 module.exports = router;

























module.exports = router;
