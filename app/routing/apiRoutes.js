// Dependencies
// imported data stored in friends.js
var friendProfile = require("../data/friends.js");

// Your `apiRoutes.js` file should contain two routes:
module.exports = function (finderApp) {
    
    //    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    finderApp.get("/api/friends", function (req, res) {
        res.json(friendProfile);
    });
    
    //    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
    finderApp.post("/api/friends", function (req, res) {
        friendProfile.push(req.body);
        
        var scoresProfiles = [];
        var profileIndex = friendProfile.length - 1;
        var scoreArray = friendProfile[profileIndex].scores
        
        for (i = 0; i < friendProfile.length - 1; i++) {
            scoreArray2 = friendProfile[i].scores
            var totalScore = 0;
            
            for (j = 0; j < scoreArray.length; j++) {
                var quizResults = Math.abs(parseInt(scoreArray[j]) - parseInt(scoreArray2[j]));
                totalScore += quizResults;
            }
            scoresProfiles.push(totalScore)
        }

        //    * This route will also be used to handle the compatibility logic.
        var lowScore = 40;
        for (i = 0; i < scoresProfiles.length; i++) {
            if (scoresProfiles[i] < lowScore) {
                lowScore = scoresProfiles[i];
            }
        }

        var lowProfileIndex = scoresProfiles.indexOf(lowScore);
        var matchName = friendProfile[lowProfileIndex].name;
        var matchPhoto = friendProfile[lowProfileIndex].photo;
        var match = {
            name: matchName,
            photo: matchPhoto
        }

        res.json(match);
    });
};