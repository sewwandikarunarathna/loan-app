
module.exports = function(app){
const loanrequestcontroller = require("../controllers/loanRequest.controller");

    var router = require("express").Router();

    //for requesting loan in customer side
    router.post("/loanrequest", loanrequestcontroller.createLoanRequest);

    // Retrieve all Loan requests
    router.get("/getloanrequests", loanrequestcontroller.findAllRequests);

    // Retrieve one customer's Loan requests
    router.get("/getcustomerrequests/:userId", loanrequestcontroller.findCustomerRequests);
    
    // Update status to give approvement for loan requests
    router.put("/approve/:id", loanrequestcontroller.approveLoanRequests);

    app.use('/api/loanRequest', router);
};
