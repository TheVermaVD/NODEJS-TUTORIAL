/*

We can use backend at many types -

TYPE-I) Sending the Static File to Client : Static Hosting
TYPE-II) Fetching Data from Database(we use data.json as DB) and to client : API Making
TYPE-III) Templating : Dynamic HTML also called Server Side Rendering(Here, we render on client side with fetching data from the json file.)



*/

const http = require("http");
const fs = require("fs");


//TYPE-I
let indexFile;
fs.readFile("Basics/Web Server/Example/II.static.html", "utf-8", (err, result)=> {

    if(err) throw err;
    indexFile= result;

});

// TYPE-II -
const db = fs.readFileSync("Basics/Web Server/Example/data.json", "utf-8"); //"utf-8" parse the data for readFileSync() and readFile() method into string or use .toString() method, if not using "utf-8" .

// TYPE_III -
const htmlPage = fs.readFileSync("Basics/Web Server/Example/III.dynamic.html", "utf-8");
// console.log(db, typeof db);// we getting in JSON string, which we can't work in our code, to work we need to convert to JS object by JSON.parse() method.
const dbObject = JSON.parse(db);

// Note : res.writeHead(1st, 2nd(Optional), 3rd(Optional)) : We can use res.writeHead() method for sending resonse with status code, user mannual status text msg(optional) to overides default msg text of status code like for 404 NOT FOUND, we sends 404 USER MESSAGE and last is response headers info in object key-value pair. 

// The status code is a 3-digit HTTP status code, like 404. Optionally one can give a human-readable statusMessage as the second argument. The last argument takes an object having the other information of response headers in key-value pairs like -

        // res.writeHead(200, {
        //     'Content-Length': Buffer.byteLength(body),
        //     'Content-Type': 'text/plain',
        // });

// Note : We can send only one the end response to client, if by some mistakes send twice then server get crashed with error "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client" , Thus, using Switch if we miss break keyword and that case get true then all the case statement get runs i.e overflowed simultanouly once one case get true, so always use break keyword to run only one case to avoid overflow and webserver crash.


http.createServer((req, res)=>{

    console.log("Request Recived from Client");
    
    //TYPE_I
    // res.end(indexFile);

    //TYPE_II
    // res.setHeader("Content-Type","application/json");
    // res.end(db);

    //TYPE_III
    // console.log(req.url);
    // res.end(htmlPage);

    switch(req.url){

        case '/':

            //Static Rendering on Client -
             res.setHeader("Content-Type","text/html");
             res.end(indexFile);
             break; 

        case '/api':
            //API Rendering on Client -
             res.setHeader("Content-Type","application/json");
             res.end(db);
             break;

        case '/product':
            //Dynamic Rendering on Client -
             res.setHeader("Content-Type","text/html");

             const product = dbObject.products[0]; //array's first element
            //  console.log(product);

             const dynamicHtmlPage = htmlPage.replace("**title**", product.title).replace("**imageURL**", product.images ).replace("**price**", product.price).replace("**rating**", product.rating ); //this method works on string i.e It is a string operation method. SO replace(1st(strng), 2nd(strng)) method takes two arg, 1st : Searchvalue in string and 2nd : replaceValue to string.
             res.end(dynamicHtmlPage);
             break;

        default :
            //  res.writeHead(404, "NT There on Server"); //Custom USer status Msg
             res.writeHead(404); //Default Status Code Msg like 404 NOT FOUND
             res.end("Page Not Found On Server Side..!");
             

    }

}).listen(8006, ()=> console.log("Server Started on Port 8006..!"));

// API end point or Route 



//Replaces text in a string, using a regular expression or search string.

// @param searchValue — A string or regular expression to search for.

// @param replaceValue — A string containing the text to replace. When the searchValue is a RegExp, all matches are replaced if the g flag is set (or only those matches at the beginning, if the y flag is also present). Otherwise, only the first match of searchValue is replaced.