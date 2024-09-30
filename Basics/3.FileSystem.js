

/*  file system module : It is use to work or do operation with file systems in our computer.


Note : Never name any file name with any module names available in nodejs, else might throw error in code, as it will confuse.

To include/work with file system(fs) module in the js, use 'fs' as argument value for require() function for to include fs module from nodejs.

#Common use for the File System module:-

Read files
Create files
Update files
Delete files
Rename files


//**Note : Every method in fs module has synchronous and asynchronous forms of methods.

//Synchronous method for reading data -

fs.ReadFileSync(file_path, options);

Synchronous method takes first paramter as path of the file and second paramters onwards it is options for taking enconding for the file, flags etc.
and It Returns the contents of the path i.e string or Buffer(if encoding doesnt provided)

/ASynchronous method for reading data -

//Note : As we know NodeJS is server so we dont want to block our server for performing some input task or huge I/O task..so we use asynchronous method over synchronous as in asynchronous task perform in parallel if there is huge input and output data transfer. We just use fs.ReadFile which bydefault it denotes ReadFile is asynchronous method of fs of nodeJS.

fs.readFile(file_path, options, callback_func);

fs.readFile(file_path, options, (err, data)=>{

    if(err) throw err;
    console.log(data);

    });


Asynchronous method take first paramter as path of the file and second paramter as options and must the last parameter as completion callback function to get our result value here. 

NOte :  Here Callback function accepts two args first err paramter and second 'data' received from the path file, which we may use or console.

The callback is passed two arguments (err, data), where data is the contents of the file.

If no encoding is specified, then the raw buffer is returned.

If options is a string, then it specifies the encoding like "utf-8"

The asynchronous methods are non-blocking in nature as compared to the synchronous methods.

Asynchronous method is preferred over synchronous method because it never blocks the program execution where as the synchronous method blocks.



Note : While providing file_path name it must follow the NodeJS path hirachacy means file must should have the complete path as while ruuning any node code we use node <path_name> 
*/


// #1. FS Reading Files : -

let fs = require("fs");
// console.log(fs);
const t1 = performance.now(); //TO measure the at which time this line has execute to measure performance of the code execution time from start to end.

let text = fs.readFileSync("./0.index.txt", "utf-8");

// fs.readFile("Basics/0.index.txt", "utf-8", (err, data)=>{
//     console.log(data)
// });



const t2 = performance.now();
// If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.





console.log(t2-t1); //Took 1.3312 miliSecond time to execute asynchronous code.
// console.log(text.toString()); //Or use if encoding is not specified then convert the content type into string by using toString() method over string.

let a = 5;

console.log(text);
console.log(a);