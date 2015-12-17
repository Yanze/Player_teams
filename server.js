var express = require("express");
var path = require('path');

var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());


app.get("/", function(req, res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});


app.listen(5000, function() {});
