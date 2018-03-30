var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var port = 8080;

var contactsData = [
  {
    id: 0,
    name: "AiYen",
    phoneNumber: "1234567"
  },
  {
    id: 1,
    name: "Stephen",
    phoneNumber: "2234567"
  },
  {
    id: 2,
    name: "blah",
    phoneNumber: "3234567"
  },
  {
    id: 3,
    name: "blah2",
    phoneNumber: "4234567"
  },
  {
    id: 4,
    name: "blah3",
    phoneNumber: "5234567"
  },
  {
    id: 5,
    name: "blah4",
    phoneNumber: "6234567"
  },
  {
    id: 6,
    name: "blah5",
    phoneNumber: "7234567"
  },
  {
    id: 7,
    name: "blah6",
    phoneNumber: "8234567"
  },
  {
    id: 8,
    name: "blah7",
    phoneNumber: "9234567"
  }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/api/contacts", function(req, res) {
  console.log("Getting all contactsData!");
  res.json(contactsData);
});

app.post("/api/contacts", function(req, res) {
  console.log("Adding data to the list: " + req.body.contact);
  contactsData.push(req.body.contact);
});

app.delete("/api/contacts/:id", function(req, res) {
  console.log("Removing contact with id: " + req.params.id);
  contactsData.splice(req.params.id, 1);
});

app.listen(port);
console.log("Server has started at port: " + port);
