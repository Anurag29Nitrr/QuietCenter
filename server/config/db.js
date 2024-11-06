const mongoose = require("mongoose");

const db = "mongodb+srv://anuragbhilai99:mmvx9TM1R5XO1qAQ@quietcenterbyanurag.lvkvzz6.mongodb.net/CalmUsers?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
