const express = require("express");
const path = require("path");

const port = 8100;
const db = require("./config/mongoose");
const Contact = require("./models/contact");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

// app.use(function (req, res, next) {
//   req.myname = "MACBOOK AIR";
//   next();
// });
// app.use(function (req, res, next) {
//   console.log("He there middelware is here: ", req.myname);
//   next();
// });

var contactList = [
  {
    name: "pratik",
    phone: "11111111",
  },
  {
    name: "Sam",
    phone: "2222222",
  },
  { name: "altman", phone: "44444444" },
];

app.get("/", function (req, res) {
  Contact.find()
    .then((contact) => {
      res.render("home", {
        title: "Contact List",
        contact_list: contact,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/practice", function (req, res) {
  return res.render("practice", { title: "Practice" });
});

app.post("/create-contact", function (req, res) {
  // return res.redirect("practice");
  // console.log(req.body);
  // console.log(req.body.name);
  // console.log(req.body.phone);
  // contactList.push({
  //   name: req.body.name,
  //   phone: req.body.phone,
  // });
  Contact.create({
    name: req.body.name,
    phone: req.body.phone,
  })
    .then((newContact) => {
      console.log("********", newContact);
      return res.redirect("back");
    })
    .catch(function (err) {
      console.log(err);
    });

  // return res.redirect("/");
});

app.get("/delete-contact/", function (req, res) {
  // console.log(req.query);
  let id = req.query.id;
  // let contactIndex = contactList.findIndex((contact) => contact.phone == phone);
  // if (contactIndex != -1) {
  //   contactList.splice(contactIndex, 1);
  // }
  Contact.findByIdAndDelete(id)
    .then((contact) => {
      console.log(contact, "Deleted Succesfully");
      return res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Our express server is running on port:", port);
});
