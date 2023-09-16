//controller for authorization

//for public access
exports.allAccess = (req, res) => {
    res.status(200).send("public content");
}

//for loggedin users (any role) 
exports.userBoard = (req, res) => {
    res.status(200).send("user content");
}

//for admin
exports.adminBoard = (req, res) => {
    res.status(200).send("admin content");
}

//for customer
exports.customerBoard = (req, res) => {
    res.status(200).send("customer content");
}
