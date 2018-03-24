var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        var bestFriend = {
            name: "",
            photo: "",
            Difference: Infinity
        };

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;

        // loop through friends to find best friend
        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;

            // console.log(currentFriend.name);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDifference <= bestFriend.Difference) {
                bestFriend.name = currentFriend.name;
                bestFriend.photo = currentFriend.photo;
                bestFriend.Difference = totalDifference;
            }
        }
        console.log(userData)
        console.log(bestFriend)

        friends.push(userData);
        res.json(bestFriend);
    });
};



 // ================
    // OLD CODE
    // ================

    //   var userData = req.body;
    //   var Scores = userData.scores;
    //   var totalDifference;   

    //   for (var i = 0; i < friends.length; i++){
    //       var currentbestie = friends[i];
    //       totalDifference = 0;

    //       // console.log(currentbestie.name);

    //       for (var k = 0; k < currentbestie.scores.length; k++){
    //           var currentbestiescore = currentbestie.scores[k];
    //           var currentUserScore = Scores[k];
    //           totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentbestiescore));
    //       }
    //       if (totalDifference <= bestFriend.Difference){
    //           bestFriend.name = currentbestie.name;
    //           bestFriend.photo = currentbestie.photo;
    //           bestFriend.Difference = totalDifference;
    //       }
    //   }
    //   friends.push(userData);  
    //   res.json(bestFriend);