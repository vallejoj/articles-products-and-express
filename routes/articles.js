/*jshint esversion: 6 */
//Joshua Lee
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var titles = [];





router.route('/')
.get((req,res)=>{
  res.render('articles/index')
})
.post(jsonParser,(req, res) =>{  //use encodeURI()for creating encode URI titles
  if (typeof req.body === 'object'){
  titles.push({ "title":req.body.title , "body": req.body.body, "Author": req.body.author});
  console.log(titles)
  res.redirect('/');
} else {
  res.redirect('/new')
}
});







module.exports = router;
