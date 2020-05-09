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
        return res.json(friendsList);
    });
    //---a POST route /api/friends, to handle incoming
    //---survey results and compatibility logic
    app.post('/api/friends', function (req, res) {
        var scoreArray = [];
        var matchScore = 0;
        //---take user input (new friend) and compare to
        //---friendsList 
        // console.log(res);
        // console.log(req);
        var userScores = req.body.scores;
        // console.log(req.body.scores);
        for (var i = 0; i < friendsList.length; i++) {
            var scoreDifference = 0;
            for (var j = 0; j < userScores.length; j++) {
                //------use absolute value of the differences, no negative totals
                scoreDifference += (Math.abs(parseInt(friendsList[i].scores[j] - parseInt(userScores[j]))))
            }
            scoreArray.push(scoreDifference);
        }
        //find best match, least amount of scoreDifference
        for (var i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] <= scoreArray[matchScore]) {
                matchScore = i;
            }
        }
        var bestMatchData = friendsList[matchScore];
        res.json(bestMatchData);

        friendsList.push(req.body);
    })
}