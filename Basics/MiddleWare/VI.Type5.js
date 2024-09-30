
const express = require("express");
const server = express();


// #Last : Third-party middleware : Developed by external packages (e.g., body-parser, morgan, etc.) - For generating middle for different Purpose like -

// i.) morgan Loger Listing Middle Ware - Install third party middle from npm -

// Syntax : npm i <middleware_name>


// Note : 'morgan' middleware module : It is a HTTP request logger middleware for node.js 

const morgan = require("morgan");
//morgan Syntax : morgan(format, options)

//Here, There are various pre-defined formats provided: tiny, combined, common, dev, short, default.


server.use(morgan('tiny')); // we get the HTTP Request tiny details.
server.use(morgan('dev')); 
server.use(morgan('default')); 

server.listen(8007);





