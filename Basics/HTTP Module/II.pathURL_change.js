

const http = require("http");


const myWebServer = http.createServer((req, res)=>{

    console.log("Request Received..!");

    //Want to access the hit pathname of url and its type -
    console.log(req.url, typeof req.url); // string datatype of pathname url.

    switch(req.url){

        //Creating Multi Route i.e Switch -
        case "/": 
            res.end("Home Page Loaded..!");
            break;

        case "/about":
            res.end("About Page loaded...");
            break;
            
        default:
            res.end("404 Not Found any Page");

    }

       
});


myWebServer.listen(8002, ()=> console.log("Server Started on 8002 Port..!"));