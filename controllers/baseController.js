const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  /*req.flash("notice", "This is a flash message.")/*w04- Sessions & Messages*/
  res.render("index", {title: "Home", nav})
}

module.exports = baseController