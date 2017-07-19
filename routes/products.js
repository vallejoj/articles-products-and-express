/*jshint esversion: 6 */
//Joshua Lee
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var products = [];


// '/produts' - POST
router.route('/')
  .post(jsonParser, (req, res) => {
    if (typeof req.body === 'object'){
    products.push({ id: 1, name: req.body.name, price: req.body.price, inventory: req.body.inventory });
    res.redirect('/');
  } else {
    res.send({ "success": false }); //redirct to new
  }
  })
  .get((req, res) => {
    res.render('product-layouts/product-index');
  });

// '/products/:id - PUT
router.route('/:id')
  .put((req, res) => {

});

// '/products/:id - DELETE
router.route('/:id')
  .delete((req, res) => {

});



// '/products/:id - GET
router.route('/:id')
  .get((req, res) => {

});

// '/products/:id/edit - GET
router.route('/:id/edit')
  .get((req, res) => {

});

// '/products/new - GET
router.route('/new')
  .get((req, res) => {

});
 module.exports = router;
