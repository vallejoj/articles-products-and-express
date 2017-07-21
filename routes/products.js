/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


let id = 0;
var products = [];

router.route('/')
  .get((req, res) => { //<--renders HTML with all products
    res.render('products/index', {
      products: products
    });
  })
  .post(jsonParser,(req, res) => { //<--creates a new product
    if (typeof req.body === 'object') { //<--need to change this to validate data that is a new product
      products.push({
        "id": id++,
        "name": req.body.name,
        "price": req.body.price,
        "inventory": req.body.inventory
      });
      res.redirect('/products');
      } else {
      res.redirect('/products/new');
    }
  });

router.get('/:id/edit', (req, res) => { //<--renders HTML generated from templates (update a product)
  res.render('products/edit', {
    products: products
  });
});

router.get('/new', (req, res) => { //<--renders HTML generated from templates (form to create product)
  res.render('new', {
    products: products
  });
});

router.route(`/:id`)
  .get((req, res) => { //<--renders HTML generated from templates (display product by ID)
    res.render('products/product', {
      products: products
    });
  })
  .put((req, res) => { //<--edits a product
    products.forEach((item) => {
      item.name = req.body.name;
        res.redirect('/products');
          console.log(item);
    });



  })
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
