//combine middleware and controller functions
//authorization part 
const {authJwt} = require("../middleware");
const controller = require("../controllers/user.controller");
const { connect } = require("mongoose");

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //for all access
    app.get("/api/test/all", controller.allAccess);

    //for users
    app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

    //for customers
    app.get("/api/test/customer", [authJwt.verifyToken, authJwt.isCustomer], controller.customerBoard );

    //for admins
    app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

    

};
