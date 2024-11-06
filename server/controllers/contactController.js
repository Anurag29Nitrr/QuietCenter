const Contact = require("../models/contactModel");

exports.createContact = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    const newContact = new Contact({ name, email, phone, subject, message });

    try {
        await newContact.save();
        res.status(200).json({ message: "Contact added successfully" });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Contact not added" });
    }
};
