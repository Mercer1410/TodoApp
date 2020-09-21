var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

var todosRoute = require("./routes/todo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/views"));
app.use(express.static(__dirname+ "/public"));

app.get("/", (req,res) => {
    res.sendFile("index.html");;
});

app.use("/api/todos", todosRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("App running on Server 3000");
});
