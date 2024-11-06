// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const bodyParser = require('body-parser');
// let port = 5000 || process.env.PORT;
// // const db = ""; // <pink>Replace with your MongoDB URI</pink>
// const db = "mongodb+srv://anuragbhilai99:mmvx9TM1R5XO1qAQ@quietcenterbyanurag.lvkvzz6.mongodb.net/CalmUsers?retryWrites=true&w=majority";

// const cors = require('cors');

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// mongoose.set("strictQuery", true);
// mongoose.connect(db).then(() => { console.log("Connection successful") }).catch((err) => { if (err) console.log(err) });

// const postSchema = mongoose.Schema(
//     {
//         name: { type: String },
//         story: { type: String, required: true },
//         supports: { type: Number, default: 0 }
//     }
// );

// const post = mongoose.model("post", postSchema);

// app.post('/newPost', (req, res) => {

//     const { name, story } = req.body;

//     const newpost = new post({
//         name, story, supports: 0
//     });

//     newpost.save().then(() => {
//         console.log("Post saved")
//         res.status(200).json({ message: "Post added successfully" })
//     }).catch((err) => {
//         console.log(err)
//         res.status(400).json({ error: "Post not added" })
//     });
// });


// app.get('/allPosts', async (req, res) => {

//     let posts = await post.find({})
//     res.status(200).json(posts);
// });

// app.put('/supportPost', async (req, res) => {
//     const postId = req.query.id;

//     if (!postId) {
//         return res.status(400).json({ error: 'Missing id parameter' });
//     }

//     try {
//         const postToUpdate = await Post.findById(postId);

//         if (!postToUpdate) {
//             return res.status(404).json({ error: 'Post not found' });
//         }

//         postToUpdate.supports += 1;

//         await postToUpdate.save();

//         return res.status(200).json({ message: 'Support added successfully' });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.put('/notSupportPost', async (req, res) => {
//     const postId = req.query.id;

//     console.log("Not support")

//     try {
//         const postToUpdate = await post.findById(postId);

//         if (!postToUpdate) {
//             return res.status(404).json({ error: 'Post not found' });
//         }

//         if(postToUpdate.supports > 0)
//             postToUpdate.supports -= 1;

//         await postToUpdate.save();

//         return res.status(200).json({ message: 'Support added successfully' });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.get('/post', async (req, res) => {
//     const postId = req.query.id;

//     try {
//         const foundPost = await post.findById(postId);

//         if (!foundPost) {
//             return res.status(404).json({ error: 'Post not found' });
//         }

//         return res.status(200).json(foundPost);
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// const contactSchema = mongoose.Schema(
//     {
//         name: { type: String },
//         email: { type: String },
//         phone: { type: String },
//         subject: { type: String },
//         message: { type: String },
//     }
// );

// const contact = mongoose.model("contact", contactSchema);

// app.post('/newContact', (req, res) => {

//     const { name, email, phone, subject, message } = req.body;

//     const newcontact = new contact({
//         name, email, phone, subject, message
//     });

//     newcontact.save().then(() => {
//         console.log("Post saved")
//         res.status(200).json({ message: "Contacted successfully" })
//     }).catch((err) => {
//         console.log(err)
//         res.status(400).json({ error: "Not contacted" })
//     });
// });

// // SERVER STARTED
// app.listen(port, () => {
//     console.log(`Listening at port : ${port}`)
// });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const postRoutes = require("./routes/postRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect Database
connectDB();

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/contacts", contactRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
