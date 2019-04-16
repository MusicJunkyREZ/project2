var router = require("express").Router();
var controller = require("../../controllers/controller.js");

// Matches with "/api/posts"
router.route("/post")
  .get(controller.findAll)
  .post(controller.create)
  .put(controller.update);

// Matches with "/api/posts/:id"
router.route("/posts/:id")
  .delete(controller.delete);

router.route("/box")
  .get(controller.findAllBoxes)

module.exports = router;