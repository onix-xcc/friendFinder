// Dependencies
var path = require("path");

// Routing
module.exports = function (finderApp) {
    // HTML Get Req for HTML
    finderApp.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Default path to home if no matching route
    finderApp.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};