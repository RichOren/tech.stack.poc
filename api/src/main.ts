import * as express from "express";
import * as bodyParser from "body-parser";
import {User} from "./user";

var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mydb");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var server = app.listen(5001, function () {
    console.log('Server listening on port 5001');
});