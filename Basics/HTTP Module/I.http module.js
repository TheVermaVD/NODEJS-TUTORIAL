
// http inbuilt Module of nodejs : Using http module of nodejs we can create our own Web Server easily i.e a http server. 

const http = require("http");

//http.createServer() to create/establish a web server and Returns a new instance of Server.

const myServer = http.createServer((req, res)=>{

   
    console.log("New Request Received Each Time on Server Hit..!!"); //we received twice the same request from the client side coz one request by user input from http request and other re from browser side for requesting for favicon.io from server.


    //Let's see the headers information of the client side -

    console.log(req.headers); //generates twice in console coz of request http of client browser.


    res.end("Hello Message Coming From Server...!");

}) ;

// Now, As we succefully created our server using nodejs module http, but to run this created server we need a port number on which our created server will run.

// We use .listen() method to run our created server on specified argument value as port number // listen() takes two arg 1st(Required) : a port number to run the server on port number, 2nd(optional) : For user taking message that succefully running on port number. 

// listen() is to Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.

myServer.listen(8000 , ()=>{

    console.log("Server Started at Port Number 8000 !");

    }) ; 

 