const express = require("express");
const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://mrinalbhattacharya_db_user:hOptSy87PqHkFLH7@cluster0.anop7ki.mongodb.net/LMS?appName=Cluster0";

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("DB Connection OK");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the Server");
});

app.listen(8004, () => {
  console.log("Server Started");
});
