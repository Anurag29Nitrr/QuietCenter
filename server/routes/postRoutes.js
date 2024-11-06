const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/newPost", postController.createPost);
router.get("/allPosts", postController.getAllPosts);
router.put("/supportPost", postController.supportPost);
router.put("/notSupportPost", postController.notSupportPost);
router.get("/post", postController.getPostById);

module.exports = router;
