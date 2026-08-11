const http = require('http')


const myServer = http.createServer((req , res)=>{
  res.end('Welcome to my Server')
})


myServer.listen(8001 , ()=>{
    console.log('Server Runnig at port 8001')
})