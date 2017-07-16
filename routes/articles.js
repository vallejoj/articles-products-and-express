/*jshint esversion: 6 */
const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    console.log('this is artcles');
  });














module.exports = router;
