/*jshint esversion: 6 */
//need to redo the order of the routes (the more / options got to the top)
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const productsDB = require('./db/products.js')
var jsonParser = bodyParser.json();
let id = 0;
var products = [{ id: "Test", name: "String", price: "Number", inventory: "Number" }];

router.route('/')
  //WORKING
  .get((req, res) => { //<--renders HTML with all products
    res.render('products/index', {
      products: products
    });
  })

  //***NOT WORKING
  .post(jsonParser,(req, res) => { //<--creates a new product
    if (typeof req.body === 'object') { //<--need to change this to validate data that is a new product
      products.push({
        "id": `${id++}`,
        "name": req.body.name,
        "price": req.body.price,
        "inventory": req.body.inventory
      });
      res.redirect('/products');
      } else {
      res.redirect('/products/new');
    }
  });

//WORKING
router.get('/:id/edit', (req, res) => { //<--renders HTML generated from templates (update a product)
  res.render('products/edit', {
    products: products
  });
});

//WORKING
router.get('/new', (req, res) => { //<--renders HTML generated from templates (form to create product)
  res.render('new', {
    products: products
  });
});

router.route(`/:id`)
  //***NOT WORKING
  .get((req, res) => { //<--renders HTML generated from templates (display product by ID)
    products.forEach((item) => {
      if (req.params.id === item.id){
        console.log('this is the item.id: ', item);
        res.render('products/product', {
          products: item
        });
      } else {
        //code block
      }
    });
  })

  //***NOT WORKING
  .put((req, res) => { //<--edits a product
      console.log('PUT recieved');
      products.forEach((item) => {
        item.name = req.body.name;
        res.redirect('/products');
    });
  })

  //***NOT WORKING
  .delete((req, res) => { //<--removes product by ID
    products.forEach((item) => {
      if (item.id == req.params.id) {
        var findIDToDelete = products.indexOf(item);
        products.splice(findIDToDelete, 1);
        } else {
      }
    });
  });

//exporting the router module
module.exports = router;
