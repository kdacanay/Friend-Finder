//----should contain two routes: 
//----a GET route with the url /api/friends. this will
//----be used to display a JSON of all possible friends.
//----a POST route /api/friends. This will be used to
//----handle incoming survey results. This route will also be
//----used to handle the compatibility logic

var path = require('path');

var friendsList = require('../data/friends.js');

//---API routes
module.exports = function (app) {
    //---API GET request to display a JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friendsList);
        console.log(req);
    });
    //---a POST route /api/friends, to handle incoming
    //---survey results and compatibility logic
    app.post('/api/friends', function (req, res) {
        //---take user input (new friend) and compare to
        //---friendsList 
        console.log(res);
        console.log(req);
    })
}