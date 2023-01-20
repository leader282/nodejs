const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);


// We can save our references to the related document by assigning the _id value. Below we create an author, then a story, and assign the author id to our story's author field.

const bob = new Author({ name: "Bob Smith" });

bob.save((err) => {
  if (err) return handleError(err);

  // Bob now exists, so lets create a story
  const story = new Story({
    title: "Bob goes sledding",
    author: bob._id, // assign the _id from our author Bob. This ID is created by default!
  });

  story.save((err) => {
    if (err) return handleError(err);
    // Bob now has his story
  });
});


// Our story document now has an author referenced by the author document's ID. In order to get the author information in the story results we use populate(), as shown below.

Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // This populates the author id with actual author information!
  .exec((err, story) => {
    if (err) return handleError(err);
    console.log("The author is %s", story.author.name);
    // prints "The author is Bob Smith"
  });


  Story.find({ author: bob._id }).exec((err, stories) => {
    if (err) return handleError(err);
    // returns all stories that have Bob's id as their author.
  });
