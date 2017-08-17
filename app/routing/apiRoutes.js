var friends = require("../data/friends.js");

module.exports = function (app){
  app.get("/api/friends", function(req, res){
      res.json(friends);
  });
  
  app.post("/api/friends", function(req, res){
      var bestFriend = {
          name:"",
          photo:"",
          Difference: Infinity
      };

      var userData = req.body;
      var Scores = userData.scores;
      var totalDifference;   

      for (var i = 0; i < friends.length; i++){
          var currentbestie = friends[i];
          totalDifference = 0;
           
          // console.log(currentbestie.name);
          
          for (var k = 0; k < currentbestie.scores.length; k++){
              var currentbestiescore = currentbestie.scores[k];
              var currentUserScore = Scores[k];
              totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentbestiescore));
          }
          if (totalDifference <= bestFriend.Difference){
              bestFriend.name = currentbestie.name;
              bestFriend.photo = currentbestie.photo;
              bestFriend.Difference = totalDifference;
          }
      }
      friends.push(userData);  
      res.json(bestFriend);
  });
};