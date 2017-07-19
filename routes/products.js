/*jshint esversion: 6 */
//Joshua Lee
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
let id= 0
var products = [{ "id":"1", "name": "Pooppps", "price": "1300", "inventory": "25" }];


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
    res.render('products/product', {products:products});
})
.put(jsonParser, (req, res) => {

    products.forEach((item) => {
      if (item.id == req.params.id ){
        item.name= req.body.name
      }else{
        res.redirect('/new')
      }
    })

})
  .delete((req, res) => {
    products.forEach((item) => {

      if (item.id == req.params.id ){
          var findIDToDelete = products.indexOf(item)
          products.splice(findIDToDelete,1);
      }else{

      }
    })
});






// '/products/:id/edit - GET
router.get('/:id/edit', (req, res) => {
  res.render('products/edit', {products:products});
});

// '/products/new - GET
router.get('/new/new', (req, res) => {
  res.render('products/new', {products:products});
});

 module.exports = router;
