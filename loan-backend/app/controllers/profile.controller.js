const db = require("../models");
const Profile = db.profiles;

//create and save  profile details
exports.createProfile = (req, res) => {
    //validate request
    if(!req.body.userId){
        res.status(400).send("content cannot be empty");
        return;
    }

    //create a profile
    const profile = new Profile({
        userId: req.body.userId,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        nic: req.body.nic
    });

    //save profile in the database
    profile
    .save(profile)
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message | "error while creating profile"
        });
    });

};

//retrieve each user's profile details
exports.findProfileDetails = (req, res) =>{
    const userId =req.params.userId;

    Profile.find({userId})
    .then(data=>{
        if (!data)
        res.status(404).send({ message: "Not found profile data with userid " + userId });
      else res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error while retrieving profile data"
        });
    });
};

//find a single loan with id
exports.findOneProfile = (req,res) =>{
    const id =req.params.id;

    Profile.findById(id)
    .then(data=>{
        if (!data)
        res.status(404).send({ message: "Not found Profile with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Profile with id=" + id });
    });
};

//update profile data by id 
exports.updateProfile = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Data to update cannot be empty!"
        });
    }

    const id= req.params.id;

    Profile.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Profile with id=${id}. Maybe Profile was not found!`
          });
        } else res.send({ message: "Profile was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Profile with id=" + id
        });
      });
};