// FS - File Operations
const FS = require('fs')

// Read , create , update , delete

// Read 

// const data = FS.readFileSync('f1.txt')

// console.log("This is File 1 Data -> " + data)

// write in a file

// FS.writeFileSync('f5.txt' , 'Random')


// append a file 

// FS.appendFileSync('f5.txt' , "This is file 5 data")


// Delete a file

FS.unlinkSync('f5.txt')








