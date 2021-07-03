const controller = require("../controllers/moviesControllers");
const express = require("express");
const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/:id", controller.getById);
router.get("/:titulo", controller.getByTitle);

module.exports = router;