
module.exports = function(app){
    const approveloancontroller = require("../controllers/approvedRequest.controller");
    
        var router = require("express").Router();
    
        //for approving loan in admin side
        router.post("/", approveloancontroller.createApproveRequest);
    
        // Retrieve all Loan requests
        // router.get("/getloanrequests", loanrequestcontroller.findAllRequests);
        // router.get("/myTest",loanrequestcontroller.testFunction);
    
        app.use('/api/approve', router);
    };
    