

//Small Assignment : Let's create a web server for which want to know the Log of user's browser whenever user hit a new request, we get the information of user browser each time -

const http = require("http");
const fs = require("fs");


const webserver = http.createServer((req, res)=>{

    console.log("New Request Recieved..!");

    const timelog = `${Date.now()} is the Current time from each request received from client and ${req.url} is the respective hit pathname\n` ;

    fs.appendFile("Basics/HTTP Module/log.txt", timelog, (err)=>{

        console.log("Text File Created and Generated the log Successfully");

        res.end("Hello From Server Received!");

    })

   
});

webserver.listen(8001, ()=> console.log("Server Started at 8001..!"));


