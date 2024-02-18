/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts") /* it added according view Engine: https://blainerobertson.github.io/340-js/views/ejs.html*/
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")

const baseController = require("./controllers/baseController")


/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

/* ***********************
 * Routes
 *************************/
app.use(static)

// Index route
app.get("/", baseController.buildHome)
/*https://blainerobertson.github.io/340-js/views/mvc-start.html*/
/*app.get("/", function(req, res){
  res.render("index", {title: "Home"})
})*/

// Inventory routes 
// https://blainerobertson.github.io/340-js/views/inv-delivery-classification.html - server.js File
app.use("/inv", require("./routes/inventoryRoute"))



/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})