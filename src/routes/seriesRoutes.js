const controller = require("../controllers/seriesControllers");
const express = require("express");
const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/:id", controller.getById);
router.get("/:titulo", controller.getByTitle);

module.exports = router;