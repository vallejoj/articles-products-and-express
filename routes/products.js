/*jshint esversion: 6 */
//Joshua Lee
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var products = [{ "id":"4","name": "MacBook Pro", "price": "1300", "inventory": "25" }];


// '/produts' - POST
router.route('/')
  .post(jsonParser, (req, res) => {
    if (typeof req.body === 'object'){
    products.push({ id: (products.length + 1), name: req.body.name, price: req.body.price, inventory: req.body.inventory });//may have to figure out new way to create ID
    console.log(req.body)
    res.redirect('/');
  } else {
    res.redirect('/new')
  }
  })
  .get((req, res) => {
    res.render('products/index');
  });

// '/products/:id - PUT

router.route(`/:id`)
.get((req, res) => {
    res.render('products/product');
})
.put(jsonParser, (req, res) => {
  console.log("these are the "+ products[0].name)
    products.forEach((item) => {
      console.log("the "+ item.name)
      if(req.body.id === item.id){
        item.name= req.body.name
        // res.redirect('/')
        console.log(item.name)
      }
    })

})
  .delete((req, res) => {

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
