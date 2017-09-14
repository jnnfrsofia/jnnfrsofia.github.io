// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
//Sets PORT variable
const PORT = process.env.PORT || 3000;

// Serves static content for the app from the 'public' directory
app.use(express.static(__dirname + '/public'));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/projects", function (req, res) {
	res.sendFile(path.join(__dirname, "public/projects.html"));
})

app.get("/resume", function (req, res) {
	res.sendFile(path.join(__dirname, "public/resume.html"));
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});