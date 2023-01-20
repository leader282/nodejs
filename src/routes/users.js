const express = require("express");
const router = express.Router();

// Require controller modules.

const user_controller = require("../controllers/userController");

/// user ROUTES ///

// GET catalog home page.
// router.get("/", user_controller.index);

// GET request for creating a Model. NOTE This must come before routes that display Model (uses id).
router.get("/user/create", user_controller.create);

// POST request for creating Model.
router.post("/user/create", user_controller.create);

// POST request for authentication
router.post("/authenticate", user_controller.authenticate);

// GET request to delete Model.
router.get("/user/:userId/delete", user_controller.deleteById);

// POST request to delete Model.
router.post("/user/:userId/delete", user_controller.deleteById);

// GET request to update Model.
router.get("/user/:userId/update", user_controller.updateById);

// POST request to update Model.
router.post("/user/:userId/update", user_controller.updateById);

// GET request for one Model.
router.get("/user/:userId", user_controller.getById);

// GET request for list of all Model items.
router.get("/users", user_controller.getAll);

module.exports = router;
