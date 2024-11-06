const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    const { name, story } = req.body;
    const newPost = new Post({ name, story, supports: 0 });

    try {
        await newPost.save();
        res.status(200).json({ message: "Post added successfully" });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Post not added" });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.supportPost = async (req, res) => {
    const postId = req.query.id;

    if (!postId) return res.status(400).json({ error: "Missing id parameter" });

    try {
        const post = await Post.findById(postId);

        if (!post) return res.status(404).json({ error: "Post not found" });

        post.supports += 1;
        await post.save();
        res.status(200).json({ message: "Support added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.notSupportPost = async (req, res) => {
    const postId = req.query.id;

    try {
        const post = await Post.findById(postId);

        if (!post) return res.status(404).json({ error: "Post not found" });

        if (post.supports > 0) post.supports -= 1;
        await post.save();
        res.status(200).json({ message: "Support removed successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getPostById = async (req, res) => {
    const postId = req.query.id;

    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ error: "Post not found" });

        res.status(200).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
