

const express = require("express");
const server = express();


server.use(express.static('public'));  //here 'public' is a static folder/remote for storing images, icon, favicon, json data etc. and using this middleware, sending to client without server interferacne.

//on client hit : localhost:8002/index.html  or localhost:8002/   - We see the file loaded from the public folder here, without any server interferance.

// localhost:8002/data.json   - from public folder data.json file will get open.

// server.get("/", (req, res)=> res.send("Heyyyyy Ram")); //already send data so at home page static file will load.//static file used first.


server.listen(8002, ()=> console.log("Strted"));
