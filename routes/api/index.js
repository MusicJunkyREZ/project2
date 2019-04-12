var router = require("express").Router();
var controller = require("../../controllers/controller.js");

// Matches with "/api/posts"
router.route("/posts")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/posts/:id"
router.route("/posts/:id")
  .delete(controller.delete);

module.exports = router;