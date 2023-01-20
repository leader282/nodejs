const express = require("express");
const router = express.Router();

// Require controller modules.

const model_controller = require("../controllers/modelController");

/// model ROUTES ///

// GET catalog home page.
router.get("/", model_controller.index);

// GET request for creating a Model. NOTE This must come before routes that display Model (uses id).
router.get("/model/create", model_controller.model_create_get);

// POST request for creating Model.
router.post("/model/create", model_controller.model_create_post);

// GET request to delete Model.
router.get("/model/:id/delete", model_controller.model_delete_get);

// POST request to delete Model.
router.post("/model/:id/delete", model_controller.model_delete_post);

// GET request to update Model.
router.get("/model/:id/update", model_controller.model_update_get);

// POST request to update Model.
router.post("/model/:id/update", model_controller.model_update_post);

// GET request for one Model.
router.get("/model/:id", model_controller.model_detail);

// GET request for list of all Model items.
router.get("/models", model_controller.model_list);

/// Model2 ROUTES ///
// ...
/// Model3 ROUTES ///

module.exports = router;
