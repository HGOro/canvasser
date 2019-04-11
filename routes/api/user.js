var router = require("express").Router();
var userController = require("../../controllers/user-controller");

//all routes that match with "/api/user"
router.route("/")
    .get(userController.find)
    .put(userController.update)
    .post(userController.create)
    .delete(userController.delete);

//routes that match with "/api/user/all"
router.route("/all")
    .get(userController.findAll)
    .delete(userController.deleteAll);

//michelle getting user data from table to send to map api
router.post("/search", userController.findByName);






module.exports = router
