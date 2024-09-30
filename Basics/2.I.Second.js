
// var http = require('http'); //Common JS Module Type 

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// import { createServer } from 'http'; //ES Module Type

// createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//   }).listen(8080);

//   console.log(__dirname);
//   console.log(__filename);


  // 2. Use of ECMAJS Module in Nodejs -

  // Note: to use this export or import use "type" : "module" .

  // Note : If one dont use note1, warnig he get : Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

  import { sum2, diff2 } from "./2.ECMAJS.js";

  // Note : To use ECMAJS Module import and export, User must change or add "type" : "module" in place of default "type" : "commonjs" in package.js


  console.log("Ram");

  console.log(sum2, diff2); //Received the direct values of the exported files here.

  console.log(sum2(2,3));
  console.log(diff2(5,2));


  