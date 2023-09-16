//to verify a signup action, needed two actions
const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateNameOrEmail = (req, res, next) => {
 //check name
    User.findOne({
     name: req.body.name
    }).exec((err, user) =>{
     if(err){
         res.status(500).send({message:err});
         return;
     }
     if(user){
         res.status(400).send({message:"Name is already in use!"});
         return;
    }
    
 

 //Email
    User.findOne({
        email:req.body.email
    }).exec((err, user) => {
        if(err){
            res.status(500).send({message:err});
            return;
     }
        if(user){
            res.status(400).send({message:"Email is already in use!"});
            return;
    }

    next();
    });
});
};

checkRoleExisted = (req, res, next)=>{
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
          if (!ROLES.includes(req.body.roles[i])) {
            res.status(400).send({
              message: `Failed! Role ${req.body.roles[i]} does not exist!`
            });
            return;
          }
        }
      }
    
      next();
};

const verifySignUp = {
    checkDuplicateNameOrEmail,
    checkRoleExisted
};

module.exports = verifySignUp;
