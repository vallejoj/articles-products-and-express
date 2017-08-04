/*jshint esversion: 6 */
//need to redo the order of the routes (the more / options got to the top)
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
//const db = require ('../db');
// const productsDB = require('./db/products.js')
var jsonParser = bodyParser.json();


const pgp = require('pg-promise')();

const { DATABASE, USER, PASSWORD} = require('../config/config');

const connectionOptions = {
  host:'localhost',
  port: 5432,
  database: DATABASE,
  user: USER,
  password: PASSWORD
};
const db = pgp(connectionOptions);

function getAllProducts(){
  return db.query('SELECT * FROM products_table');
}




router.route('/')
  //WORKING
  .get((req, res) => { //<--renders HTML with all products
    getAllProducts()
    .then((products) => {
      console.log(products);
      res.render('products/index', {products});
    })
    .catch((err) => {
        console.log(err);
      });
    // res.render('products/index', {
    //   products: products
    // });
  })
  .post(jsonParser,(req, res) => { //<--creates a new product
    console.log('this is req.body',req.body);
    if (typeof req.body === 'object') { //<--need to change this to validate data that is a new product
      res.redirect('/products');
      return db.none(`INSERT INTO products_table VALUES (default, ${req.body.name}, ${req.body.price}, ${req.body.inventory}`);
      } else {
      res.redirect('/products/new');
    }
  });

//WORKING
router.route('/:id/edit')
.get ((req, res) => { //<--renders HTML generated from templates (update a product)
  res.render('products/edit', {
    products: products
  });
})
  .put((req, res) => { //<--edits a product
    console.log('PUT recieved');
    products.forEach((item) => {
      item.name = req.body.name;
      res.redirect('/products');
  });
});

//WORKING
router.get('/new', (req, res) => { //<--renders HTML generated from templates (form to create product)
  res.render('new', {
    products: products
  });
});


  router.route('/delete')
  .get((req, res) => {
    console.log('rendering???');//<--renders HTML generated from templates (form to create product)
    res.render('products/delete', {
      products: products
    });
  })
  .delete((req, res) => { //<--removes product by ID
    products.forEach((item) => {
        var findIDToDelete = products.indexOf(item);
        products.splice(findIDToDelete, 1);
        console.log('delete');
    });
  });




router.route(`/:id`)
  .get((req, res) => { //<--renders HTML generated from templates (display product by ID)
console.log('you got me here');
    products.forEach((item) => {
      console.log(item.id + "and" + req.params.id );
      if (req.params.id === item.id){
        console.log('this is the item.id: ', item);
        res.render('products/product', {
          products: item
        });
      } else {
        //code block
      }
    });
  });


//exporting the router module
module.exports = router;
