// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var app = express();

// Added the dynamic port
// =============================================================
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set up the routing
// =============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
