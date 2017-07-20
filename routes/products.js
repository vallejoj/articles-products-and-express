/*jshint esversion: 6 */
//Joshua Lee
const express = require('express');
const router = express.Router();
const app = express();


let id = 0
var products = [];

router.route('/')
  .get((req, res) => {
    res.render('products/index', {
      products: products
    });
  })
  .post((req, res) => {
    //  let matches = req.body.name.match(/\d+/g);
console.log(req.body);
    if (typeof req.body === 'object') {
      products.push({
        "id": id++,
        "name": req.body.name,
        "price": req.body.price,
        "inventory": req.body.inventory
      }); //may have to figure out new way to create ID
      console.log(products)
      res.redirect('/products/product');
    } else {
      res.redirect('/products/new')
    }
  });



// '/products/:id/edit - GET
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
        item.name = req.body.name
        res.redirect('/products/product');
        console.log(item)
      } else {
        res.redirect('/new')
      }
    })
  })
  .delete((req, res) => {
    products.forEach((item) => {

      if (item.id == req.params.id) {
        var findIDToDelete = products.indexOf(item)
        products.splice(findIDToDelete, 1);
      } else {

      }
    })
  });


module.exports = router;
