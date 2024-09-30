
/*

What is REST API or RESTfull API ?  how It is differ from normal API ?

REST API is representational state i.e a type of API, which have its own some standards/rules.

REST stands for "REpresentational State Transfer" . REST is a sofware architectural style that defines a set of standard constraints/rules to be used for creating web services. 

REST API communicate in between the client and server side with its some standards rules defined by REST to follow to communcation for easy accessing web services. while normal api doesnot have any rules we can use in any ways, 

REST API is a way of accessing web services in a simple and flexible way.

#REST API standards rule follows (defined by REST) -

i) RESFull API must follow the Client-Server Archeture for respective every client machine(BRowser, Mobile, ALexa etc.) and Client must be independent of server for rendering on UI, So REST must communicate in exchange of JSON data over client-server architecture to respective all crossplatform at client side.

ii) We know Client-Server comunicate via Request from Client and We get Response Server simple, and that Response Server can send anyone of it(text file, image, html doc, json) as per Client Requested from the server.
Ex: Suppose Client Request GET /blog page > Server(Proccessed the req) > Fetched from DB > Returned Data to Server > Server Made HTML doc at server side > Send the response(html doc) - SSR(Known as 'Server Side Rendering') .Now, If the client was Browser then the recived HTML doc get rendered easily on browser but but If the client was not browser i.e Phone, Alexa Device etc. where HTML doc cant render, that's a problem for such client machine. THUSS, REST API says Rendering at client side must be independent from server. SO, to follow the independent nature, Once Request received from client went to server and server fetch desire data from DB and now It just sends the desire Data(i.e RAW Data) to client machine and now client machine has work to render the recived raw data at respective client machine, that may render at client m/c using REact, Flutter etc, known as CLient side Rendering(CSR).
(NOTE: Server can sends teh raw data from DB to client in formate/form of XML(old way), or JSON(new key-value pair).)

Note : SSR - If server sends the direct HTML after proccesing(including db) all request from client to the client machine, then It is known as Server Side Renderig(SSR). It is more faster rendering and secure than CLient Side Rendering(CSR), google, youtube all these do the SSR. It reduce some steps in rendering than CSR.

Note : CSR - If server sends the desired Raw Data from Database to Client machine and now client machine renders those raw data at their respective machine(Mobile, Browser ), client machine can use ReactJS, AngularJS, Flutter(mobile) for rendering recived data at their side, known as CLient side Rendering(CSR). It bit slow rendering than CSR coz first data get fetched then render and It increase some steps in rendering than SSR.

#BEST Practice as per Use -
Note : WHen In advance we know tht our client machine would be Browser(google.com), then It is good to send the HTML(SSR) directly to client, as It will be fast in rendering and reduced the two steps in compare if we do CSR.

Note : When We have the Cross-Platform at client side e.g Browser, Mobile,IOS APPlication etc, then Server must send the raw Data i.e in JSON formate to client and then CLient side i.e respetcive FrontEnd team will handle the json data as per their platform and they will render to respective devices. 

Ex: Client - Browser   > Server Return HTML
Ex: Client - IOS/Android   > Server Return JSON Data

i) REST API always respect all HTTP methods uses, i.e -

GET /user  -  user data read and return the data. (GET Request measn data has to be read only.)

POST /user   -  create a new user data at DB (POST Request means data Creation only)

PATCH /user  - update the user data


#NOT Right Practice TO Write/Which REST APi DOest not follow -

POST  /updateUser   - user update (XXX - PATCH must be use and do not use updateUSer just write user)
POST  /createUser   - create (XXX )
GET  /getUser   -  read data (XXX )
POST  /deleteUser   -  delete USer (XXX )

Thus, Respect HTTP method uses like GET, POST etc.


---------------------CODER_DOST---------------------------------

i) MUST received request by HTTP Methods, GET, POST,PUT, PATCH, DELETE etc.

ii) Have standard path defined for each data sending and following the rule of HTTP methods, like for POST request must sent in request body.


iii)All communication done via REST API uses only HTTP request.

iv) REST API follows Stateless HTTP Protocols. A "stateless REST API" helps in making each HTTP Request independent of previous requests, Whereas "Statfull Protocol" save client session data on the server side and may be dependent upto other requests.

v) In REST architecture, statelessness refers to a communication method in which the server completes every client request independently of all previous requests. Clients can request resources in any order, and every request is stateless or isolated from other requests.

vi) Working: A request is sent from client to server in the form of a web URL as HTTP GET or POST or PUT or DELETE request. After that, a response comes back from the server in the form of a resource which can be anything like HTML, XML, Image, or JSON. But now JSON is the most popular format being used in Web Services.

vii) REST follows the right status code for each Response Received.

#HTTP REQUEST :  In HTTP there are five methods that are commonly used in a REST-based Architecture i.e., POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations respectively. There are other methods which are less frequently used like OPTIONS and HEAD.

GET: The HTTP GET method is used to read (or retrieve) a representation of a resource. In the safe path, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).

POST: The POST verb is most often utilized to create new resources. In particular, it’s used to create subordinate resources. On successful creation, return HTTP status 201, returning a Location header with a link to the newly-created resource with the 201 HTTP status.

PUT: It is used for updating the capabilities. However, PUT can also be used to create a resource in the case where the resource ID is chosen by the client instead of by the server. In other words, if the PUT is to a URI that contains the value of a non-existent resource ID. On successful update, return 200 (or 204 if not returning any content in the body) from a PUT. If using PUT for create, return HTTP status 201 on successful creation. PUT is not safe operation but it’s idempotent.

PATCH: It is used to modify capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource. This resembles PUT, but the body contains a set of instructions describing how a resource currently residing on the server should be modified to produce a new version. This means that the PATCH body should not just be a modified part of the resource, but in some kind of patch language like JSON Patch or XML Patch. PATCH is neither safe nor idempotent.

DELETE: It is used to delete a resource identified by a URI. On successful deletion, return HTTP status 200 (OK) along with a response body.



GET − Provides a read only access to a resource.

POST − Used to create a new resource.

DELETE − Used to remove a resource.

PUT − Used to update or replace a existing resource or to create a new resource.

#REST API How It Looks On stanadrs -

Read   -    GET     -    No Data Send            -    /students
Read   -    GET     -    Get Data In URL params  -    /students/:id

Create   -  POST     -   Data In Request Body  -      /students

Update  -   PUT    -   Update Data in req Body & Target Data In url params                  -                             /students/:id

Delete   -       DELETE   data in url params    -      /students/:id




*/


// #Creating REST API : -  Using Generalyy Create REST API for C.R.U.D. operation of HTTP MEthods.

const fs = require("fs");
const express = require("express");
const { type } = require("os");

const server = express();
const db = fs.readFileSync("Basics/Web Server/Example/data.json", "utf-8");

const dbObj = JSON.parse(db); //JS object now

const dbArry = dbObj.products; //retuns an array containing multiple object of data

// # API root or BASE URL - e.g: google.com/api/v2


//#1. a) Read API  -  GET /products  

server.get("/products", (req, res)=>{

    // console.log(db, typeof db) ;
    // res.set('Content-Type', 'application/json');
    // res.send(db);

    res.json(dbObj)


}) ; //Here REST understands : products is a resource.


//#1. b) Read API -  GET /products/:id 

server.get("/products/:id", (req, res)=>{

    // console.log(req.params.id); //returns the id passed at URL.
    const id = req.params.id; 
    // console.log(id, typeof id);//return string datatype.

    const id_Obj = dbObj.products.find((item, index)=>{

        return item.id=== +(id); //converted to number datatype.
    });

    res.json(id_Obj)

}) ;

// Convention : /products   - usually retuns an collection i.e array outer json strig(having multipe object)
// Convention : /products/:id   - usually retuns an object outer json strig(having single object)




// #2. Create API   -  POST  /products  

// Usually Happens with POST Request Method and PUT can also be used. 

// In POST Requst, HTTP request send data in body from Postman, body> select raw (choose JSON) > add data in JSON formate. 

// Here, We basically Insert the JSON data into the json.file, that the new entry by user -

server.use(express.json());

server.post("/products", (req, res)=>{

    console.log(req.body); //Express cant fetch body request data untill we dont use the "BodyParser Middle Before this."

    dbArry.push(req.body);

    // res.send(`Following Data Has been Saved Succefully In db -\n ", ${req.body}`);

    res.status(201).json(req.body); //we usully want to see saved data one copy to client. //used 201 for created Item status code.

})

// Note : The new pushed data isnt saved anywhere statically, If we restart server then we dont get tht new id as that new data we didnt save to any database, we just retriving from same server instance. 


// #3. a) Update API   -  PUT  /products/:id
//In Update : An existing data where user wants to change something inside across a id, example, suppose wants to change prodcut name of first id.

server.put("/products/:id", (req, res)=>{

    //We will send the updated data for that sepcified id in Request Body section(In JSon formate)

    const id = +(req.params.id) ; //converted to number from string datatype.

    const arryIndex = dbArry.findIndex(item=> item.id=== id );

    dbArry.splice(arryIndex, 1, {...req.body, id : id});

    res.status(204).end("New Data Has Been Replace at Hit Id..!");

    // 204 status code used when we want to send response to client with no content in the body.
    //201 status code : Data has been created.
    //205 - Reset Content
    //202 - Accepted
    //200 - OK
    //201 - Created


})

// #3. b) Update API   -  PATCH  /products/:id

//Here, In patch we only patch new data with existing old data to that respective id.

server.patch("/products/:id", (req, res)=>{

    //We will send the patch data for that sepcified id in Request Body section(In JSon formate)

    const id = +(req.params.id) ; //converted to number from string datatype.

    const arryIndex = dbArry.findIndex(item=> item.id=== id );

    const respObj = dbArry[arryIndex];

    dbArry.splice(arryIndex, 1, {...respObj, ...req.body});

    res.status(200).json("New Data Has Been Replace at Hit Id..!");

})


// Note : There are two Update Methods : -

// PUT : Replace the existing Item from Data with new Data as per user id number.

//PATCH : Only Patch i.e update some data in item with not replacing old one i.e patch it with new one i.e correct it. We usually do in edit section, where old data remains same with some new data.


//#4. Delete API Creation   -  DELETE  /products/:id

//Here, We delete the respective id item from the database.

server.delete("/products/:id", (req, res)=>{

    //Here, we will be delet item for corresponding id -

    const id = +(req.params.id) ; //converted to number from string datatype.

    const arryIndex = dbArry.findIndex(item=> item.id=== id );

    dbArry.splice(arryIndex, 1 );

    res.status(200).json("Given ID Data Has Been Deleted..!");

});




/* C.R.U.D -

C  - Create(POST, PUT)

R  - Read (GET)

U  - Update ( PUT, PATCH)

D  - Delete (DELETE)


*/


server.listen(8008);