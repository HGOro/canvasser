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

//getting user data from table to send to map api

router.post("/search/name", userController.findByName);
router.post("/search/byid", userController.findByVoterID);






module.exports = router
