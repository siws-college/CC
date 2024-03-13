const express = require("express");
var app = express();
app.get("/add/:num_1/:num_2", function(req, res) {
const num1 = req.params.num_1;
const num2 = req.params.num_2;
const result = parseInt(num1) + parseInt(num2);
res.json({result: result});
})
app.get("/sub/:num_1/:num_2", function(req, res) {
const num1 = req.params.num_1;
const num2 = req.params.num_2;
const result = parseInt(num1) - parseInt(num2);
res.json({result: result});
})
app.get("/mult/:num_1/:num_2", function(req, res) {
const num1 = req.params.num_1;
const num2 = req.params.num_2;
const result = parseInt(num1) * parseInt(num2);
res.json({result: result});
})
app.get("/div/:num_1/:num_2", function(req, res) {
const num1 = req.params.num_1;
const num2 = req.params.num_2;
const result = parseInt(num1) / parseInt(num2);
res.json({result: result});
})
app.listen(3300, function() {
console.log("The port is 3300");
});
