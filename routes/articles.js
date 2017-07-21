/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var articles = [];



router.route('/')
  .get((req,res)=>{ //<--renders HTML with all articles
    res.render('articles/index');
  })
  .post((req, res) =>{ //<--creates new article; use encodeURI()for creating encode URI titles
    if (typeof req.body === 'object'){

      articles.push({ "title":req.body.title , "body": req.body.body, "author": req.body.author, "urlTitle":encodeURI(req.body.title)});
        console.log(articles)
      res.redirect('articles/');
      } else {
      res.redirect('/new');
  }
});

router.route(`/:title`)
  .get((req, res) => { //<--renders HTML generated from templates displaying article info by title
    res.render('articles/article', {articles});
  })
  .put(jsonParser, (req, res) => { //<--update article infromation
    articles.forEach((item) => {
      if (item.urlTitle == req.params.urlTitle ){
        item.title= req.body.title;
        }else{
      }
    });
  })
  .delete((req, res) => { //<--removes an articel by title
    products.forEach((item) => {
      if (item.id == req.params.id ){
        var findIDToDelete = articles.indexOf(item);
        articles.splice(findIDToDelete,1);
      }else{
    }
  });
});

//exporting the router module
module.exports = router;
