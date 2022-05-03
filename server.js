const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var random_name = require('node-random-name');
const path = require("path");

var app = express();
 

var corsOptions = {
    origin: "*"
    // function (origin, callback) {
    //   // console.log('originorigin ', origin);
    //   if (whiteListHosts.indexOf(origin) !== -1) {
    //     callback(null, true)
    //   } else {
    //     callback(new Error('Not allowed by CORS'))
    //   }
    // }
  }

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// Wiring up middleware, this must be  before calling any routes
// https://expressjs.com/en/guide/writing-middleware.html
app.use(express.static(path.join(__dirname, "public")));

//index
app.get("/", function (req, res) {
  res.status(200).send("Welcome to sample nodejs server");
});

//new employee
app.get("/user", function (req, res) {
  res.status(200).send({id: Math.ceil( Math.random()*100), name: random_name()});
});

try {
    app.listen(process.env.PORT || 80);
    console.info("Server listening on " +( process.env.PORT || 80))
} catch(e) {
    console.error("Failed to start server ");
    console.error(e)
}
