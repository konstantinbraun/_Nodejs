var express = require('express');
var routes = require("./routes");

var router = express.Router();

var todoItems = [
  {id: 1, desc: "foo"},
  {id: 2, desc: "bar"},
  {id: 3, desc: "baz"},
];


router.get('/', function(req, res) {
  res.render('index', {
    title: "Todo list",
    items: todoItems
  });
});

router.post('/add', function(req, res) {
  var item = req.body.newItem;

  todoItems.push({
    id: todoItems.length + 1,
    desc: item
  });

  res.redirect('/');
});

router.get('/dynamic', function(req, res) {
	res.render('dynamic', {
		title: "Current time"
	});
});

router.post('/sayHello', routes.sayHello);

module.exports = router;