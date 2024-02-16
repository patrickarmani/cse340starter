// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities")
const acccountController = require("../controllers/accountController")

// Route to build inventory by classification view
//router.get("/type/:classificationId", invController.buildByClassificationId);

module.exports = router;