
// We will see the use of HTTP Method Request i.e GET,POST, PUT, PATCH, DELETE

//We will handle all types of client HTTP method Request(especially GET and POST)

//req.method  -  tells the Request MEthod by client URL(string Datatype).

//req.url  - tells the Request path name of URL(string datatype)



/*
#HTTP Methods : - GET, POST, PUT, PATCH< DELETE

1. GET Method : To get i.e read some data from the server, we use GET request.

www.youtube.com/search  --> Get Request by default while hitting any URL.

//ByDfault our browser do the GET request.


2. POST Method : When you want to send data on server and mutate some data in server.

//when user use form, data submit we use POST request.

E.g : On clicking on the form submissin buttom, we can see the POST request from the client side.


3. PUT Request : When uploading the pic by user and storing on server.

4. PATCH Request : When existing entry want to change.

5. DELETE Request : When we want to delete some data from server.


** Mostly Commonly We use GET and POST Request to work i.e exchange of data over HTTP.



*/


const http = require("http");

const myServer = http.createServer((req, res)=>{

    if(req.url==="/favicon.ico") return res.end();

    console.log(req.method, typeof req.method); //To know the Request Method by client URL.

    switch(req.url){

        case '/':
            if(req.method==="GET"){
                res.end("HOME Page")
            }

            break;

       case '/about':
        if(req.method==="GET"){
            res.end("About Page")
        }   

        break;
        
        case '/signup':
            if(req.method==="GET") {
                res.end("Signup Page Pop-up of HTML, CSS, JS Page");
            }else if(req.method==="POST"){ //POST means on /signup page means user entered the data i.e filled the data and now trying to hit on signup button of signup form, so the request will get handle here as that would be POST request by 'signup' file path.

                //DB Query....
                res.end("Succefully Signup, as Data Stored in Database")

            }

            break;

        default:

            res.end("Page Not Found!");
    }

    // res.end("Heyyy");

});


myServer.listen(8004, ()=> console.log("Server Started on 8004 Port..!"));