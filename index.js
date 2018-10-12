var express = require("express");

var app = express();

var port = process.env.PORT || 3000;

// routes
app.get("/", function (req, res) {

    res.send("HELLO world");
});

// event listener
app.listen(port);