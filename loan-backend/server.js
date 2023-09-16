//setup express server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//parse requests of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


//open Mongoose connection to MongoDB database
const db = require("./app/models");
const { authJwt } = require("./app/middleware");
const Role = db.role;

db.mongoose.connect('mongodb+srv://sewwandik:hlfMj7NJ92zhN9CR@loandatabase.dqaksyh.mongodb.net/loandb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to GetLoan."});
});

//routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/loan.routes")(app);
require("./app/routes/loanRequest.routes")(app);
require("./app/routes/approvedRequest.routes")(app);
require("./app/routes/declinedRequest.routes")(app);
require("./app/routes/profile.routes")(app);


//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});



  //create 3 important rows in roles collection

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          username: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });

        new Role({
          username: "customer"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'customer' to roles collection");
        });
  
       
        new Role({
            username: "admin"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'admin' to roles collection");
          });

         
      } 
    });
  }

  //pw - hlfMj7NJ92zhN9CR
  //usernme - 
  //conn string - mongodb+srv://sewwandik:<password>@loandatabase.dqaksyh.mongodb.net/
  //previous conn string - mongodb+srv://Sewwandi:p3z-k7-B98NVDzF@assignment.35hfy.mongodb.net/loandb