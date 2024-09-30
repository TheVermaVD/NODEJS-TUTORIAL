

/*  #Client-Server Architecture : We have two elements in this i.e client side/User's Browser and other side is Web Server Side like each website have their own server like google have their own server and each website have their own server to communicate with client side for getting the data from the respective web server side.

So, How Client side i.e browser communicate with respective web server, the answer is via HTTP or HTTPs Protocol, that's the only way user's browser can communicate with his own server which might be eastlish in nodejs/php etc. 


Web server also connected with database server for accessing desired date from their. 

How Works Communication : Always Client makes the initiating for the communication with server via sending the request first then server reads the data needed for the client side so after proccess the required information, then server respond to client via Response way.SO here we conclude -

Request(req) : always Clients sends the request to server for wanting some information (sends via https or http).

Response(res) : via response way server sends back the desired response to client, which needed by client(vai same path i.e https or http)

Note : Port Number of https protocol is 443 .

#Response Status Can Have following Codes : -

i) 4XX (Client Error Happened) : Means Client Side Sent/Asked information have some error like -

400 - Bad Request
401  - Unauthorised 
403 - Forbidden 
404 - Not Found
405 - Method Not Allowed

This all means Server if sends anyone of them to client browser measn client has done some mistake in asking the request which server can't fullfill .



ii) 2XX (Succes Code) : Successfully sends the data to client as per demanded request from client, the  server resonse with starting with 2XX code like -

200 - "OK"
201 - "Created"
202 - "Accepted"

iii) 3XX (Indicates for Redirections) : Server Respond these code to client/browser when there will be any Redirection happened, like such codes -

301  -  MOoved Permanently
302  - Found
304 -  Not Modified

iv) 5XX (Server Erorr Happened) : These Codes sends back to client side if server have some error and can't fullfill the request, these could be like -

500  -  Internal Server Error
502  -  Bad Gateway



#To see all the status code in browser : Go to dev tools i.e Developer Tools and switch to Network Tab and you can do the throttling i.e controlling the speed the http loading and getting back the response from web server.

You can make slow 3G , offline 2G etc. 

#We can see the total number of request for a perticular domain or domain with path, under the Network tab..So no of request alwas = no of response. 

# Browser has classified all the type of content for request and response in filter section like all, Js, document, font, css, js etc which are possible request and response content type could be for a https request.

#Content-Type that exchange between client to server and server to client, can have followings -

Content-Type : <media-type>

               text/html (for html doc type)
               application/json (for JSON string data)
               text/javascript (for js file type)
               text/css (for css file type)
               image/png (for image type)
               multipart/form-data (for form data type)



*/

//We have http module in nodejs(which nodejs inbuilt module) for working up with http and creating server -

const http = require("http");

// createServer() takes a request listener function which is callback function responsible for handling each time request from client side means whenever user refresh the page on browser/client side then this callback function get runs. Here, callback function takes two argument i.e req and res for working with request recieved by client and for sending response(as some data) from server to client side.

// and this method Returns created <http.Server>

// Server is a type of function which runs on each request entered by user from client side i.e browser side.

// Creating a local server -

const data = {age : 5} ; //JS object
const createdServer = http.createServer((req, res)=>{

    console.log("Server Started");


    //Wants to see or access and work with recieved request from client side -
    console.log(req.url);

    // Wants to send data to client side in form of response (res can have multiple methods) -
    res.setHeader("dummy", "dummyValue"); //setting up a new dummy header response from server side to send it to client side, takes key-value pair as argument seperated with space.

    // Wants to send the JSON string to client -
    // res.setHeader("Content-Type", "application/json"); 

    //Sending the content type to the browser, to specify which type of content we sending -
    res.setHeader("Content-Type", "text/html");


    //Note : At the end we means once we done with all other info that we want to send to client we end the res.end() at the last line so it will send it out.
    // res.end(JSON.stringify(data)) ; //ending the response with providing some data to display on client UI, It is optional as res.end() require to end the server means sending it back to client side, thus shows completion of request and response of http protocol.

    res.end("Ram");

}) ; 


createdServer.listen(8000) ; //We binded the created server on port number 8080 to see the response their.


// # JSON.stringify() ; takes JS object and transfer it into JSON string type.

// # JSON.parse() ; takes JSON string and convert to Javascript object type.

// NOte : When server get started then it render two times first for the our URL request to server side and 2nd server request is done by browser itself bydefault for its favicon.icon which ask the info/data about the favicon to the server side and if we handled that favicon request by browser then we can see the favicon after url hit means got the response for /favicon.icon url path.

//  https://wwww.google.com/about 

// Here:  /about is kwnown as url path name.

// www.google.com is a server or host and after this kwown as url for http request by browser/client.

// NOte : http request se bhi data access kar sakte hai jo browser ke side se aaya hai aur http response se data bhej sakte hai.
