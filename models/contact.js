const mongoose = require("mongoose");

const Contact_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", Contact_Schema);

module.exports = Contact;
