var express = require("express");
var app= express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
   res.render("index"); 
});

app.get("/habilidades", function(req, res){
   res.render("habilidades"); 
});

app.get("/projetos", function(req, res){
   res.render("projetos"); 
});

app.get("/sobre-mim", function(req, res){
   res.render("sobre-mim"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("O site tá no ar!!!");
});