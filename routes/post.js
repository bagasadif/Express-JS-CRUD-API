const express = require("express");
const postController = require("../controllers/post");
const validator = require("../validator/post")

const router = express.Router();

router.post("/", validator.createPostValidator, postController.createPost);
router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.patch("/:id", validator.updatePostValidator, postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
