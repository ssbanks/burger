//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
var router = require('./controllers/burgers_controller.js');
app.use('/', router);
app.use(express.static(__dirname + '/public'));



// Server(listening)
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// // Server.js - This file is the initial starting point for the Node/Express server.
// // *********************************************************************************



// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// // Static directory
// app.use(express.static("app/public"));


// // Routes
// // =============================================================
// require("./app/routes/api-routes.js")(app);
// require("./app/routes/view-routes.js")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
