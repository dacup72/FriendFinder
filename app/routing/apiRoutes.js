var friends = require("../data/friends");
var characters = require("../data/characters");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.get("/api/characters", function(req, res) {
    res.json(characters);
  });

  app.post("/api/friends", function(req, res) {


      //object constructor for the best match
      var bestFriend = {
        name: "",
        photo: "",
        description: "",
        friendDifference: 1000
      }

      var totalDifference = 0;
      var characterDifference = 0;
      var userData = req.body;
      var userScores = userData.scores;

      for (i = 0; i < characters.length; i++) {
        totalDifference = 0;

        for (x = 0; x < characters[i].scores.length; x++) {
          totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(characters[i].scores[x]));
        }
        console.log("Character Name: ", characters[i].name, "Total Score: ", totalDifference);

        if (totalDifference <= bestFriend.friendDifference) {
          bestFriend.name = characters[i].name;
          bestFriend.photo = characters[i].photo;
          bestFriend.description = characters[i].description;
          bestFriend.sound = characters[i].sound;
          bestFriend.friendDifference = totalDifference;

          console.log("The new best match is " + bestFriend.name + " with a friend score of: " + totalDifference + "\n");

        } else {
          console.log(characters[i].name + " is not your best friend\n")
        }
      }
      friends.push(userData);
      res.json(bestFriend);
      console.log(bestFriend);
      console.log("==========================");
  });
};
