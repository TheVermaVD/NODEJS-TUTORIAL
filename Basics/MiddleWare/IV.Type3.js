
// #3. Built-in middleware: Provided by Express (e.g., express.static, express.json, etc.).

/*Express has the following built-in middleware functions:

i) express.json() parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+

ii) express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+

iii) express.static() serves static assets such as HTML files, images, and so on.


*/

// Now we want to send query parameter with hidden form, from POST method which can be possible if we send data in HTTP Request Body, TO do so -

const express = require("express");
const server = express();

//BodyParser Middleware Provided by Express for parsing the HTTP request Body, which express bydefault can't understand needed BodyParse middleware -

//BodyParser Midddle Ware -
server.use(express.json()); //Now After this onwards, Express would able to read req.body as well. //when sending data in json file of body of HTTP request.

//URLencolderParser Middle Ware -
// server.use(express.urlencoded());

//Static Hosting File Middle Ware -
// server.use(express.static('public'));//sending static file as per entered URL to client like image file, html file, JSON file.. without interuption of server.


const auth = (req, res, next)=> {
 
    //After using BodyParser we can recieve the data send from body request -
    console.log(req.body);
    // 
    if(req.body.password=="12345"){

        next();//to pass the middle ware.

    }else{

        res.sendStatus(401); //401 used for unauthorised client side error.

    }

};



// Here, We used two middlewares 1st for Bodyparsing and 2nd for auth.


// Applying on the specific route with GET Method -
server.get("/", auth, (req, res)=>{

    res.send("Response From Server..! GET Request"); 

});

server.post("/", auth, (req, res)=>{

    res.send("Response From Server..! POST Request"); 

});

server.listen(8001);


// ----------------------------------------------------------------

// #Sending data from Endpoint/API In Variable/Dynamic Way with some static path -

const server2 = express();

server2.get('/', (req, res)=> res.send("HomePage"));

server2.get('/product/:id', (req, res)=>{

    console.log(req.params);
    res.send("Product Page Having Id = ")
       
    }); 

// Note : Here after product page the data is dynamic which can be changed at runtime, so that can be hit in server side by providing colon(:) afterwards dynmaic path e.g /:id (This is i.e ':id' known as URLparamas in URL)

// Note: key i.e 'id' is defined at here server and 'value' provided corresponding to it on client side.

// Note : There are three ways we can send data from client side in URL to server side -

// a) using Query Parameter : localhost:8000/product?id=2&name=Prakash (HEre every data can be seen in query parameter, this can be use when data is not so important like while searching on internet) and can be accesss using req.query at server side. 

//b) using params : localhost:8000/product/2 (HEre key value is not mentioned in url, which encoded in server/backend i.e we only specify the desire 'value' here). and can be accesss using req.params at server side. 

//c) using hidden data sent, form-data(send in body of HTTP Request) and can be accesss using req.body at server side. 

server2.listen(8009);
