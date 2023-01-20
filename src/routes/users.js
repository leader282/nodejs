const express = require("express");
const router = express.Router();

// Require controller modules.

const user_controller = require("../controllers/userController");

/// user ROUTES ///

// GET catalog home page.
router.get("/", user_controller.index);

// GET request for creating a Model. NOTE This must come before routes that display Model (uses id).
router.get("/user/create", user_controller.user_create_get);

// POST request for creating Model.
router.post("/user/create", user_controller.user_create_post);

// GET request to delete Model.
router.get("/user/:id/delete", user_controller.user_delete_get);

// POST request to delete Model.
router.post("/user/:id/delete", user_controller.user_delete_post);

// GET request to update Model.
router.get("/user/:id/update", user_controller.user_update_get);

// POST request to update Model.
router.post("/user/:id/update", user_controller.user_update_post);

// GET request for one Model.
router.get("/user/:id", user_controller.user_detail);

// GET request for list of all Model items.
router.get("/users", user_controller.user_list);

/// Model2 ROUTES ///
// ...
/// Model3 ROUTES ///

module.exports = router;


app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});

