const fs = require("fs");

console.log("hello");

const data = fs.readFile("f1.txt", (err, data) => {
  if (err) {
    console.log("Cannot read File");
  }

  console.log("I am f1 data-> " + data);
});



console.log("Byee");
