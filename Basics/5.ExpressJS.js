
// #ExpressJS :  It is default i.e defaukto mostly we use it as default webserver framework with combination of nodejs mostly in market.

// It is Fast, unopinionated, minimalist web framework for Node.js

//We can install expressjs locally in our project with cmd -

// npm install express --save  (--save for adding dependencies in default dependencies object rather than other object dependencies.)

//using ExpressJs framework we can easily manage the http callback function smoothy. i.e the function which is handler for managing all the http request from client side get easily manage with using express js framework.


//Let's with Conventional Way of how we used to create server and we will see analogy with express -
const http = require("http"); 

const myServer = http.createServer(myHandler);

//Pulled the callback http request handler function outside -
function myHandler(req, res){

    console.log("New Request Recived From the Client");
    res.end("Hello From Server");
}

myServer.listen(8009, ()=> console.log("Server started on 8009"));

// ---------------------------------------------------------------------------

//ExpressJs : Makes request handling from client side easy with providing the inbuilt requestHanlder function and other modules related with request parsing like query parameter etc.

// To include expressjS in file, just import it like a module name with name 'exprss' --

const express = require("express"); 

// console.log(express, typeof express); //here express is a function.

const app = express() ; // we initialise the express intance name 'app'. // here app is handler function i.e callback function developed by express to handle http request. 


app.get("/", (req, res)=>{
    res.send("Hello From Server.., It is the Homepage Route!")
})    ;// http requet method GET we used here means on get request we handling 

app.get("/about", (req, res)=>{
    res.send("Hello From Server.., It is About Route Page !"+ " hey "+req.query.name+" you are "+req.query.age);
}); //Handing the query Parameters as well!


// const myServer2 = http.createServer(app); //app is the handler function here
// myServer2.listen(8010, ()=> console.log("Server started on 8010!"));


// Express can handler also the listen method directly without using the http module and its createServer() method -

app.listen(8010, ()=> console.log("Server started on 8010!"));



// ------------------------------------------------------------------------

/*  Versioning of an any App -

4.18.2 

1st Part -> 4  (Major Version : Major Changes Breaks API)
2nd Part -> 18 (Minor Version : Minor Changes Do not Break API)
3rd Part -> 2  (Patches Version : Bug Fixes )


#3rd Part (Last Part) - Small Bug Fixes (Optional To Update) : e.g Changing the somewhere text of app or space etc. 4.18.2 or 4.18.3

e.g : console.log("Home")  ---> console.log("HomePage")     -  4.18.2

#2nd Part (Middle Part) - Minor Update (Recommended for Security) : e.g Added a new feature or new change or update pushed.  4.19.2 

e.g : app.get("/profile", ()=> console.log("Profile Page Visted")) -- New Feature Added.     -     4.19.2

#3rd Part (1st Part) - Major Release/Breaking Update (Be Causious) : you should not update an existing project coz Major Update may break your server coz of huge change in code OR, if you working up entirely on new project then you can change to updated version.  5.19.2

e.g : app.GET("/", ()=> console.log("Homepage It Is")) -- ExpressJs changed the their old 'get' method to new 'GET' method.   -    5.19.2 


Note : you can read any app log.txt or history by vistin their open source git hub respository where we can read all update of versioning in details.


#To install any specific available version of express(old or new) : npm i express@4.18.2  (i.e Delebertly changing version as per latest version)

(To unintall : npm un express)

#npm i express   --> always give us the latest version.


#

4.18.2  - restrict version only allow to update
^4.18.2  - Compatible Version Change(Minor+Patch Version only Change) : Install all recommended Minor and Patch Version on >npm update express cmd. e.g From 4.18.2 to below 5.0.0 i.e 4.18.2 ,4.18.7, 4.20.7 (Do not get Changed the Major Version)

~4.18.2 - Approximate Version Change(Patch Version Only Change) : Update only the Patch Version only i.e 4.18.2 , 4.18.9, (Not 4.19.2)

*4.18.2 - Matches Any Version Change(allowed to Update Major+Minor+Patch To Update) : e.g 5.18.2  (Not Recommedned on Existing Project.)



-------------------------------------------------------------------

version  - Must match version exactly
>version   - Must be greater than version
>=version etc
<version
<=version
~version  - "Approximately equivalent to version" See semver
^version  - "Compatible with version" See semver
1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0
http://... See 'URLs as Dependencies' below
* Matches any version
"" (just an empty string) Same as *
version1 - version2 Same as >=version1 <=version2.
range1 || range2 Passes if either range1 or range2 are satisfied.

For example, these are all valid:-

{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl",
    "kpg": "npm:pkg@1.0.0"
  }
}


res.send() - html doc send 
res.json() - Json data send
res.render() - sent directly the html doc(reduces one step)

SSR(Server Side Rendering) vs CSR(Client Side Rendering) : -

CSR : Client Received the JSON data from Server then uses frontend tool(ReactJS) to render on browser.Client Machine. It is little slow in rendering than SSR coz -

SSR : Server side rendering first fetch the data from data base and then we dont parse into JSON, we directly send the html doctype to client side and gets render on client side fastly. Thus, SSR is faster than CSR.

NOte : IN CSR, Client fetch data in form of API then It renders.

*/
