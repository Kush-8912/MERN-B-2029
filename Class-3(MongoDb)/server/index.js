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

app.use(express.json())

// Course Manamegmet Platform

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },

  instructor: {
    type: String,
    required: true,
  },

  ratings: {
    type: Number,
  },

  isPublished: {
    type: Boolean,
    required: true,
  },
});

let CourseModel = mongoose.model('course' , courseSchema)

app.get("/", (req, res) => {
  res.send("Hello from the Server");
});


// Create a Course

app.post('/api/courses' , async (req , res)=>{
    await CourseModel.create({
        course_name : req.body.course_name,
        instructor : req.body.instructor,
        ratings : req.body.ratings,
        isPublished : req.body.isPublished
      })


      res.send('Course Created')
})

app.listen(8004, () => {
  console.log("Server Started");
});
