const express = require("express");

const app = express();

app.use(express.json())

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

//Create - post 


app.post("/topics/courses" , (req , res)=>{
   courses.push(req.body)
   res.send('Course Created')
})

// update 
app.put('/topics/courses/:id' , (req , res)=>{
    let course = courses.find((course) => course.id === parseInt(req.params.id));

    course.courseName = req.body.courseName
    course.ratings = req.body.ratings

    res.send(course)
})


// , delete

app.delete('/topics/courses/:id' , (req , res)=>{
    let course = courses.find((course) => course.id === parseInt(req.params.id));
    // Delete the course
})


// patch 

app.listen(8002, () => {
  console.log("Server Started at port 8002");
});
