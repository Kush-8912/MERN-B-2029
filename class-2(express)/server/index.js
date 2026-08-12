const express = require("express");

const app = express();

const courses = [
  { id: 1, courseName: "Java", instructor: "Anisha", ratings: 4.7 },
  { id: 2, courseName: "JavaScript", instructor: "Shounak", ratings: 4.8 },
  { id: 3, courseName: "DBMS", instructor: "EkamJeet", ratings: 4.9 },
  { id: 4, courseName: "Python", instructor: "Kunal", ratings: 5 },
];

// Read -> get

app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

app.get("/topics/courses", (req, res) => {
  res.send(courses);
});

app.get("/topics/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  res.send(course);
});

//Create , update , delete

app.listen(8002, () => {
  console.log("Server Started at port 8002");
});
