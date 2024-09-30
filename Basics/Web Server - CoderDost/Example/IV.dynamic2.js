
const http = require("http");
const fs = require("fs");


const db = fs.readFileSync("Basics/Web Server/Example/data.json", "utf-8");
const dbObject = JSON.parse(db);

const htmlPage = fs.readFileSync("Basics/Web Server/Example/III.dynamic.html", "utf-8");


http.createServer((req, res)=>{

    if(req.url==="/favicon.ico") return res.end();

    console.log(req.url, req.method);

    if(req.url.startsWith("/product")){ //startsWith(search_String, startindex(default=0)), return true if found else return false if not matches.

        // console.log(req.url);
        // want to get only id by client side entered in URL -
        const id = req.url.split('/')[2]; //retuns id in string
        //  console.log(id, typeof id); 

        const prodArry = dbObject.products; //returns the array.

        const eachProduct = prodArry.find((item, index)=> item.id === (+id) );
        // console.log(eachProduct);

        const render = htmlPage.replace("**title**", eachProduct.title).replace("**imageURL**", eachProduct.images ).replace("**price**", eachProduct.price).replace("**rating**", eachProduct.rating );;

        res.setHeader("content-type","text/html");
        res.end(render);


        return; //to return to function(works same like break keywrod.)

    }


   res.end("not starrted wiith /product") ;
     

}).listen(8007, ()=> console.log("Server Started on 8007.."));

// PostMan : A one type of browser/sofware application, by which we able to request any type API Request means HTTP Request Methods like GET, POST, DELETE... coz browser URL can do only GET Request, and any form submissin do the POST request, and want to do POST request from client side without using form then POSTman can do that.

// With help of POstMan, without using Frontside we can play around with client HTTP request information like HTTP Request header means we can change for testing purpose without using client side.