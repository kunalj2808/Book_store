"use strict";
var express = require("express"); 
var path = require("path");
var nunjucks = require("nunjucks");
var join = require("path").join;
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var jwt = require ("jsonwebtoken");
var Sys = new require("../Boot/Sys");
Sys.App = express();
var fs = require("fs");
const port = 4020;
// Set Views
nunjucks.configure("./App/Views", {
    autoescape: true,
    express: Sys.App,
    watch: true,
  });

  Sys.App.set("view engine", "html");

  //set node modules
  Sys.App.use("/node_modules", express.static("./node_modules"));

// for parsing application/json
Sys.App.use(bodyParser.json({ limit: "50mb" }));

// for parsing application/xwww-
Sys.App.use(bodyParser.urlencoded({ limit: "50mb" }));
Sys.App.use(bodyParser.urlencoded({ extended: true }));
Sys.Server = require("http").Server(Sys.App);

//Set Config Folder
Sys.Config = new Array();
fs.readdirSync(join(__dirname, "../Config"))
  .filter((file) => ~file.search(/^[^\.].*\.js$/))
  .forEach(function (file) {
    Sys.Config[file.split(".")[0]] = require(join(
      join(__dirname, "../Config"),
      file
    ));
  });

  //Initializing the App MVC Folder
  console.log("Initializing Server...");
fs.readdirSync(path.join(__dirname, "../", "./App"))
  .filter(function (file) {
    return file.indexOf(".") !== 0 && file.indexOf(".") === -1;
  })
  .forEach(function (dir) {
    if (dir != "Views" && dir != "Routes") {
      // Ignore Load Views & Routes in Sys Object
      Sys.App[dir] = {};
      console.log("Loading... App " + dir);
      fs.readdirSync(path.join(__dirname, "../", "./App", dir))
        .filter(function (file) {
          return file.indexOf(".") !== 0;
        })
        .forEach(function (file) {
          Sys.App[dir][file.split(".")[0]] = require(path.join(
            __dirname,
            "../",
            "./App",
            dir,
            file
          ));
        });
    }
  });
 
  //Load Routes
  console.log("Loading... Router");
["Web.js"].forEach(function (file) {
  //console.log("********************" + join(join(__dirname, '../App/Routes'), file));
  Sys.App.use("/", require(join(join(__dirname, "../App/Routes"), file))); // Register Router to app.use
});

// Mongodb Connection
  console.log("Loading... DB Connection");  
  
    // CONNECTION EVENTS
    var dbURI = "";
  dbURI = Sys.Config.Database[Sys.Config.Database.connectionType].url;
  console.log({ dbURI });
  mongoose.connect(dbURI, Sys.Config.Database.option);

  // When successfully connected
  mongoose.connection.on("connected", async function () {
    Sys.Namespace = [];
    console.log("Mongoose default connection open to " + dbURI)
  });

  // Set port on Server
  Sys.Server.listen(port, function () {
    Sys.App.use(function (req, res, next) {
      console.log("listening")
    });


  console.log(
    "(---------------------------------------------------------------)"
  );
  console.log(
    " |                    Server Started...                        |"
  );
  console.log(
    " |                  http://" +
      Sys.Config.Database[Sys.Config.Database.connectionType].mongo.host +
      ":" +
      port +
      "                      |"
  );
  console.log(
    "(---------------------------------------------------------------)"
  );
});
// Export all the Modules
  module.exports = { app: Sys.App, server: Sys.Server };
