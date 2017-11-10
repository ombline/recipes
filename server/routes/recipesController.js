const express = require("express");
const router = express.Router();
const passport = require("passport");
const config = require("../config");

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

router.get("/likes", (req, res, next) => {
  User.findById(req.user._id)
    .then(user => {
      return user.populate("likes").execPopulate();
    })
    .then(user => {
      res.json("");
    });
});

router.post(
  "/:id/like",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const recipeId = req.params.id;
    const userId = req.user._id;
    Recipe.findByIdAndUpdate(recipeId).then(recipe => {
      let stringedLikes = recipe.likes
        .filter(id => id !== null)
        .map(id => id.toString());
      if (stringedLikes.includes(userId.toString())) {
        recipe.likes.splice(stringedLikes.indexOf(userId), 1);
        return recipe
          .save()
          .then(() => {
            res.json("unliked");
          })
          .catch(err => {
            next(err);
          });
      } else {
        recipe.likes.addToSet(userId);
        return recipe
          .save()
          .then(() => {
            res.json("liked");
          })
          .catch(err => next(err));
      }
    });

    User.findByIdAndUpdate(userId).then(user => {
      let stringedLikes = user.likes.map(id => id.toString());
      if (stringedLikes.includes(recipeId)) {
        user.likes.splice(stringedLikes.indexOf(recipeId), 1);
        return user.save();
      } else {
        user.likes.addToSet(recipeId);
        return user.save();
      }
    });
  }
);

router.get("/new", (req, res, next) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      return next(err);
    }
    res.json("/new", {
      recipes
    });
  });
});

router.post(
  "/new",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    console.log("request received");
    console.log(req.body);

    const infoRecipe = {
      name: req.body.name,
      image: req.body.image,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      duration: req.body.duration,
      tags: req.body.tags,
      user: req.body.user._id
    };

    console.log(infoRecipe);

    const newRecipe = new Recipe(infoRecipe);

    newRecipe
      .save()
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        next(err);
      });
  }
);

router.get(
  "/test/favs",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const likedRecipe = req.body.likes;
    User.findById(req.user._id)
      .populate("likes")
      .exec((err, user) => {
        if (err) {
          return next(err);
        }
        res.json(user.likes);
      });
  }
);

router.get(
  "/test/myrecipes",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    Recipe.find({ user: req.user._id }).then(recipes => {
      res.json(recipes);
    });
  }
);

router.patch(
  "/test/:id/edit",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    console.log("it arrives here, BODY", req.body);
    const rID = req.params.id;
    const info = req.body;
    Recipe.findByIdAndUpdate(rID, info, { new: true }).then(updatedRecipe => {
      console.log("ALLLLLEEEEEZZZZZ", updatedRecipe);
      // if (err) {
      //   return next(err);
      // }
      res.json(updatedRecipe);
    });
  }
);

router.post("/:id/delete", (req, res, next) => {
  const rId = req.params.id;

  Recipe.findByIdAndRemove(rId, err => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
