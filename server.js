var express = require("express");
var app = express();
var fs = require("fs");
const fetch = require("node-fetch");

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/5191370522d4d6c692b5d7c6/latest/NOK";
let rates;
let data = fetch(BASE_URL)
  .then((response) => response.json())
  .then((res) => (rates = res.conversion_rates));

app.get("/", function (req, res) {
  let data = fetch(BASE_URL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.conversion_rates);
      res.send(getArray(result.conversion_rates));
    });
});

let getArray = (object) => {
    let myArray = [];
    for(x in object) {
        myArray.push([x, object[x]]);
    }
    return myArray;
}

var server = app.listen(8081, function () {
  var host = "127.0.0.1";
  var port = 8081;
  console.log("Example app listening at http://%s:%s", host, port);
});
