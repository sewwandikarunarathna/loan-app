module.exports = (app) =>{
    const profiles = require("../controllers/profile.controller.js");
   
    var router = require("express").Router();
   
     // Create a new profile
     router.post("/", profiles.createProfile);
   
     // Retrieve one user's profile data
    router.get("/getprofiledetails/:userId", profiles.findProfileDetails);
   
    // Retrieve a profile with id
    router.get("/:id", profiles.findOneProfile);

    // Update profile with id
    router.put("/:id", profiles.updateProfile);

     app.use('/api/profiles', router);
   };