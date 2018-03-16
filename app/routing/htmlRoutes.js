var path = require('path');
var express = require("express");

module.exports = function(app) {

  // app.use(express.static(__dirname + "/../public"));

  //Path for homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //Path for survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //Default path to homepage
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
