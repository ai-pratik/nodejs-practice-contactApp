//Required Library
const mongoose = require("mongoose");

//MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/Contact_List_App");

//Connection instance
const db = mongoose.connection;

//if there is an error
db.on("error", console.error.bind(console, "Error Connecting to DB"));

//if DB is Connected Succesfully
db.once("open", () => {
  console.log("Connection to Db is Succesfull");
});
