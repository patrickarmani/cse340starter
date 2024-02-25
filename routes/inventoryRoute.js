// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

const utilities = require("../utilities")
//const invChecks = require("../utilities/inventory-validation")


// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

/* ************************************************
 * Route to build vehicles by classificationId View
 * Unit 3, Activities
**************************************************/
//router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId))


module.exports = router;