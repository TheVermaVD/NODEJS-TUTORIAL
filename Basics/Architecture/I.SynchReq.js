
const fs = require("fs");

/*  How Here Execution of Code Happened : 1st JS read one by one line from top to bottom, where first executed "1", then 

reached to synchornous code i.e Blocking Code means untill we dont receive the output we cant reach to next line of code, so readFileSync() method went to Thread Pool (as it is non-blocking operation of code), where It blocks the one thread by taking input into/by thread/worker and after processing it returned the result to Event Queue so that occupied thread is free now and we get the output in next line, that's how blocking i.e synchronous code works.

After this executed the "2".

*/


console.log("1"); 


// Sync... readFile() is a Blocking Request -
// const result = fs.readFileSync("Basics/Architecture/demo.txt", "utf-8") ;
// console.log(result);


console.log("2");



