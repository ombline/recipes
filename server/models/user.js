const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  role: {
    type: String,
    enum: ["Admin", "Member"],
    default: "Member"
  },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ],
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
