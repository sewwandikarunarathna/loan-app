
module.exports = function(app){
    const declineloancontroller = require("../controllers/declinedRequest.controller");
    
        var router = require("express").Router();
    
        //for approving loan in admin side
        router.post("/", declineloancontroller.createDeclineRequest);
    
        // Retrieve all Loan requests
        // router.get("/getloanrequests", loanrequestcontroller.findAllRequests);
        // router.get("/myTest",loanrequestcontroller.testFunction);
    
        app.use('/api/decline', router);
    };
    