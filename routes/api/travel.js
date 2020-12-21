const router = require("express").Router();
const travelController = require("../../controllers/travelController");

router.route("/")
  .get(travelController.findAll)
  .post(travelController.create);

router
  .route("/:id")
  .get(travelController.findById)
  .put(travelController.update)
  .delete(travelController.remove);

module.exports = router;