/*jshint esversion: 6 */
//Joshua Lee
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
let id= 0
var products = [];


// '/produts' - POST
router.route('/')
  .post(jsonParser, (req, res) => {
    if (typeof req.body === 'object'){
    products.push({ "id":id++ , "name": req.body.name, "price": req.body.price, "inventory": req.body.inventory });//may have to figure out new way to create ID
    console.log(products)
    res.redirect('/');
  } else {
    res.redirect('/new')
  }
  })
  .get((req, res) => {
    res.render('products/index', {products:products});
  });

// '/products/:id - PUT

router.route(`/:id`)
.get((req, res) => {
    res.render('products/product');
})
.put(jsonParser, (req, res) => {
  console.log("these are the "+ req.body.name)
    products.forEach((item) => {
      console.log("the "+ req.params.id)
      console.log(item.id)
      if (item.id == req.params.id ){
        item.name= req.body.name
        console.log("look at the"+ item.name)

      }else{
        console.log('poo')

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
