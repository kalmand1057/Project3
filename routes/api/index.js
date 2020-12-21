const router = require("express").Router();
const travelRoutes = require("./travel");

// Book routes
router.use("/travel", travelRoutes);

module.exports = router;

