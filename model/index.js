var mongoose = require("mongoose");
mongoose.set("debug", true);
var url = process.env.DATABASEURL || "mongodb://localhost/todo-api";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");