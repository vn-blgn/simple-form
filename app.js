const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/index.html", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  response.sendFile(__dirname + "/thanks.html");
  console.log(request.body);
});

app.listen(3000, console.log("http://127.0.0.1:3000/"));
