/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const app = express();


let id = 0;
var products = [];

router.route('/')
  .get((req, res) => {
    res.render('products/index', {
      products: products
    });
  })
  .post((req, res) => {
    if (typeof req.body === 'object') {
      products.push({
        "id": id++,
        "name": req.body.name,
        "price": req.body.price,
        "inventory": req.body.inventory
      });
      console.log(products);
      res.redirect('/products/product');
      } else {
      res.redirect('/products/new');
    }
  });


router.get('/:id/edit', (req, res) => {
  res.render('products/edit', {
    products: products
  });
});

router.get('/new', (req, res) => {
  res.render('new', {
    products: products
  });
});

router.route(`/:id`)
  .get((req, res) => {
    res.render('products/product', {
      products: products
    });
  })
  .put((req, res) => {
    products.forEach((item) => {
      if (item.id == req.params.id) {
        item.name = req.body.name;
        res.redirect('/products/product');
        console.log(item);
        } else {
        res.redirect('/new');
      }
    });
  })
  .delete((req, res) => {
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
