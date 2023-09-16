//define mongoose model
const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role", 
    new mongoose.Schema({
        username: String
    })
);

module.exports = Role;