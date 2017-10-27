const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe");
const User = require("../models/user");

router.get("/", (req, res, next) => {
  Recipe.find({}, (err, allRecipes) => {
    if (err) {
      return next(err);
    }
    res.json(allRecipes);
  });
});

router.get("/:id", (req, res, next) => {
  const recipeId = req.params.id;
  Recipe.findById(recipeId)
    .populate("user")
    .exec((err, recipe) => {
      if (err) {
        return next(err);
      }
      res.json(recipe);
    });
});

module.exports = router;
