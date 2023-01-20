const model = require("../models/model");

// displaying Page home
exports.index = (req, res) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
// Display list of all Authors.
exports.model_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Author list");
};

// Display detail page for a specific model.
exports.model_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// Display Author create form on GET.
exports.model_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle model object create on POST.
exports.model_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: model create POST");
};

// Display model object delete form on GET.
exports.model_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: model delete GET");
};

// Handle model delete on POST.
exports.model_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display model object update form on GET.
exports.model_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle model object update on POST.
exports.model_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
