// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);

/*
The built-in validators include:

All SchemaTypes have the built-in required validator. This is used to specify whether the field must be supplied in order to save a document.
Numbers have min and max validators.
Strings have:
enum: specifies the set of allowed values for the field.
match: specifies a regular expression that the string must match.
maxLength and minLength for the string.
*/
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
    required: [true, "Why no eggs?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea", "Water"],
  },
});
/*
A schema can also have instance methods, static methods, and query helpers. 
The instance and static methods are similar, but with the obvious difference that an instance method is associated with a particular record and has access to the current object. 
Query helpers allow you to extend mongoose's chainable query builder API (for example, allowing you to add a query "byName" in addition to the find(), findOne() and findById() methods).
*/

// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance, passing a callback
awesome_instance.save((err) => {
  if (err) return handleError(err);
  // saved!
});

SomeModel.create({ name: "also_awesome" }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
});

// update operation
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
awesome_instance.save((err) => {
  if (err) return handleError(err); // saved!
});


const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ sport: "Tennis" }, "name age", (err, athletes) => {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
});


// find all athletes that play tennis
const query = Athlete.find({ sport: "Tennis" });

// selecting the 'name' and 'age' fields
query.select("name age");

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec((err, athletes) => {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
});


Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) // Additional where query
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec(callback); // where callback is the name of our callback function.

/*
  The find() method gets all matching records, but often you just want to get one match. The following methods query for a single record:

findById(): Finds the document with the specified id (every document has a unique id).
findOne(): Finds a single document that matches the specified criteria.
findByIdAndRemove(), findByIdAndUpdate(), findOneAndRemove(), findOneAndUpdate(): Finds a single document by id or criteria and either updates or removes it. These are useful convenience functions for updating and removing records.
*/



// File: ./models/somemodel.js

// Require Mongoose
// const mongoose = require("mongoose");

// Define a schema
// const Schema = mongoose.Schema;

const SomeModelSchema1 = new Schema({
  a_string: String,
  a_date: Date,
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("SomeModel", SomeModelSchema1);

// You can then require and use the model immediately in other files. 
// Below we show how you might use it to get all instances of the model.

// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/somemodel");

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);