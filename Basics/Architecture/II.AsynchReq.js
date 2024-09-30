
const fs = require("fs");

/*  How Here Execution of Code Happened : 1st Executed "1" then

Executed "2" and lastly Executed the Non-blocking code i.e async code.

NOte : Here, We used readFile() method which non-blocking operation so it doesnot block the code execution of flow and moved to next steps for execution and meanwhile non-blocking code get process and returned the result from callback function to console.

Note : Here In Blocking vs Non-Blocking Req, as In blocking request It blocks the code execution further untill it doesnot return the result thus we can say that Blocking Operation return some value as result. But, In Non-blocking it does not blocks the code execution so it implies that it must not return any value that's why non-blocking i.e async method always returns the void i.e undefined. We basically get the result i.e from the callback function once code get processed.



*/
console.log("1");


// Async... readFile() is a Non-Blocking Request -
fs.readFile("Basics/Architecture/demo.txt", "utf-8", (err, result)=>{

    if(err){
        throw err;
    }else{
        console.log(result);
    }

}) ;



console.log("2");
console.log("3");
console.log("4");



// -------------------------------------------------------------------
// NOte : In Blocking Code of operation, For thread pool we have bydefault value of thread/worker is 4 only. But we can increase it as per user's system cpu core number i.e User's System CPU Core number decides the extension of default Thread Pool Size.

// Ex: -

// Default Thread Pool Size = 4
//Maximum Thread Pool Size = As per user's number of core CPU, e.g if a user has 8core CPU = 8 (Max Thread Extended for that system from default thread pool size number)


//TO Check our System CPU core number, we have operating system module in nodejs which tells all information about our operating system like core number etc...

// const os =  require("os");

// console.log(os.cpus().length) ; // 4 for my system, so I cant increase as my laptop cpu core no is 4 which is the default thread size of Thread Pool.