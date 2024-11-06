
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
