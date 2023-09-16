const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["customer", "admin", "user"];

db.loans = require("./loan.model.js")(mongoose);
db.loanRequests = require("./loanRequest.model.js")(mongoose);
db.approvedRequests = require("./approvedRequest.model.js")(mongoose);
db.declinedRequests = require("./declinedRequest.model.js")(mongoose);
db.profiles = require("./profile.model.js")(mongoose);


module.exports = db;