const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: [String],
    required: true
  },
  duration: {
    type: String
  },
  tags: {
    type: [String],
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  likes: {
    type: [Schema.Types.ObjectId],
    ref: "User"
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
