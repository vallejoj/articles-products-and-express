/*jshint esversion: 6 */
//Joshua Lee
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var articles = [];





router.route('/')
.get((req,res)=>{
  res.render('articles/index')
})
.post(jsonParser,(req, res) =>{  //use encodeURI()for creating encode URI titles
  if (typeof req.body === 'object'){
  articles.push({ "title":req.body.title , "body": req.body.body, "author": req.body.author, "urlTitle":encodeURI(req.body.title)});
  console.log(articles)
  res.redirect('/');
} else {
  res.redirect('/new')
}
});


router.route(`/:title`)
.get((req, res) => {
    res.render('articles/article', {articles});
})
.put(jsonParser, (req, res) => {

    articles.forEach((item) => {
      if (item.urlTitle == req.params.urlTitle ){
        item.title= req.body.title
      }else{

      }
    })

})
  .delete((req, res) => {
    products.forEach((item) => {

      if (item.id == req.params.id ){
          var findIDToDelete = articles.indexOf(item)
          articles.splice(findIDToDelete,1);
      }else{

      }
    })
});







module.exports = router;
