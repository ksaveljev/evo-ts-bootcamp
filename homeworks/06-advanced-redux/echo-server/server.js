"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var port = 3001;
app.use(cors_1["default"]());
app.use(body_parser_1["default"].json());
app.get("/", function (req, res) {
    res.send("re");
});
app.post("/log", function (req, res) {
    console.log(req);
    res.send("re");
});
app.listen(port, function () {
    console.debug("Example app listening at http://localhost:" + port);
});
