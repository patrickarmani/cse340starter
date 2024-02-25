// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities")
const accountController = require("../controllers/accountController")

const regValidate = require("../utilities/account-validation")
const Util = require("../utilities/")

// Route to build login page
router.get("/login", utilities.handleErrors(accountController.buildLogin))

// Process the login request
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLoginData,
  utilities.handleErrors(accountController.accountLogin)
)

// Route to build inventory by classification view
router.get("/type/:classificationId", accountController.buildByClassificationId);

// Route to registration
router.get("/register", utilities.handleErrors(accountController.buildRegister));

// Process the login attempt
router.post(
    "/login-attempt",
    (req, res) => {
      res.status(200).send('login process')
    }
  )

module.exports = router;