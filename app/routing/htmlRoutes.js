//----should include two routes: a GET route to /survey
//----which should display the survey page
//----a default, catch-all route that leads to home.html
//----which displays the home page

var path = require('path');

//---HTML GET Requests
//---survey page
module.exports = function (app) {
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    })
}