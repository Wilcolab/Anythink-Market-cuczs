//TODO: seeds script should come here, so we'll be able to put some data in our local env
// add the required modules
const mongoose = require("mongoose");
// need to require the models to actually use the schema
require("../models/User");
require("../models/Item");
require("../models/Comment");
// the schema to be used
const User = mongoose.model("User");
const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");

// connecting to the database
mongoose.connect(process.env.MONGODB_URI);

// async function because it is important to make sure each part is being added and used before closing the connection
async function localDataSeeding(sampleAmount) {
  for (let i = 0; i < sampleAmount; i++) {
    // create a user
    const user = new User();

    // set user info to sample info
    user.username = `User${i}`;
    user.email = `user${i}@email.com`;

    // await saving the user
    await user
      .save()
      .then(console.log(`User loaded`))
      .catch(console.error())

    // create new item
    const item = new Item({
      title: `${user.username} item`,
      description: `this is the item that ${user.username} added it's cool`,
      image: "frontend/public/placeholder.png"

    });

    // set item seller I think this could be moved to into the item call
    item.seller = user;

    // await saving the item 
    await item
      .save()
      .then(console.log(`item added by ${user.username}`))
      .catch(console.error())

    // create new comment
    const comment = new Comment();

    // set the comment info
    comment.item = item;
    comment.body = `here is a comment for ${item.title}`;
    comment.seller = user;

    // save the comment
    await comment
      .save()
      .then(console.log("a comment was made"))
      .catch(console.error())
  }
  // closing the database connection after the loop is done
  await mongoose.connection.close();
}

// calling the function for seeding to actually make 100 or whatever input number is necessary
localDataSeeding(100);
