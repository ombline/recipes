const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const User = require("../models/user");

const storage = cloudinaryStorage({
  cloudinary,
  folder: "images",
  allowedFormats: ["jpg", "jpeg", "png", "gif"]
});

const parser = multer {{ storage }};
router.post("/upload", parser.single("image"), (req, res, next) => {
  User.findById();
  res.json(req.file);
});

module.exports = router;
