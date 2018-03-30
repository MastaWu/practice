var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.listen(port);
console.log("Server has started at port: " + port);
