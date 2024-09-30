

const fs = require("fs") ; //we imported nodejs built-in module i.e file system in our file ie module.

// CRUD : Create/Write, Read, Update, Delete 

// #1. Write File -

// Note : In Nodejs built-in all modules have two types of methods - sync type and async type -
fs.writeFileSync("./Basics/FileSystem/test.txt", "Hey Prakash How are you! Well 1"); //sync : this was an synchronous call, to create file name 'test.txt' 

// NOte : if we run this file again with some changes in content then that will replace the older content in the test.txt

//Async

 fs.writeFile("./Basics/FileSystem/test2.txt","Test 2 hai" , (err)=> {

    if(err) throw err;

    console.log("The file has been saved!"); //This is the msg for the user to get confirm!
});



// #2. Read File -


// Sync Call -
const result = fs.readFileSync("./Basics/FileSystem/test.txt", "utf-8"); //In sync, method returns the result as output.
console.log(result);


// NOte : While providing the path name, user must remember to use only nodeJs path accessing hirachay like above : "./Basics/FileSystem/test.txt" ,  in order to read the file of local system.

//Async Call - Async method doesnot return any result, although it accepts a callback function as last argument in readFile() method so that it returns atleast the error if occurs or result if recieved. 

// It receive the result in callback function, must provided as last argument in readFile() method, where In callback func, first arg : err takes, 2nd arg : data or output or result.

 fs.readFile("./Basics/FileSystem/test.txt","utf-8", (err, result) =>{
            if(err){
                console.log("Error Aaya Hai Bhai", err);
            }else{
                console.log(result);
            }
  })


//   #3. Update File - 

// fs.appendFile() : this method doesnot over-rides the content as fs.writeFile() method each time, apendFile() method each time apend the date to existing data with not alerting existing data at source file. 

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created & added the content as the first entry and if file exist then apend the specified content to source path as new entry without altering the exiting content there.

// The fs.writeFile() method replaces the specified file and content.

fs.appendFileSync("./Basics/FileSystem/demo2.txt", "\nRowdy 1");

fs.appendFile("./Basics/FileSystem/demo.txt", "\nRowdy2", (err)=>{
    if(err){
        console.log("Error hai bhai", err);

    }else{
        console.log("The file has been appended successfully!");
    }
})


// #4.  Delete File - 

// To delete a file with the File System module,  use the fs.unlink() method.
// 
// The fs.unlink() method deletes the specified file -

fs.unlinkSync("./Basics/FileSystem/demo2.txt"); //takes only one argument i.e path and returns undfined i.e In other word, function returns the void.

fs.unlink("./Basics/FileSystem/demo3.txt", (err)=>{

    if(err){

        // throw `error hai bhai ${err}`;
        // console.log("Err hai bhai :", err);
        throw new Error(err)

    }else{
        console.log("File was deleted!");
    }
}); //takes only two argument, 1st as path and second as callback function to return error if occured else we print successfull message of deletion and This method returns undefined i.e In other word, function returns the void.

// #  Some Other Methods Related with fs -

// I.  To copy content from one file to another file -

fs.cpSync("./Basics/FileSystem/demo.txt", "./Basics/FileSystem/demo2.txt") ; //takes two argument, 1st source file path and 2nd : target file path to copy entire content from source to target location, if destiny file name is not exist then it can create specicified destiny file path name there.

// Synchronously copies the entire directory structure from src to dest, including subdirectories and files

// @param src — source path to copy.

// @param dest — destination path to copy to.


// II. To see the statistic data about the current file -

console.log(fs.statSync("./Basics/FileSystem/demo2.txt"));


//III. To Make a new directory i.e a FOlder name without altering the file content -

fs.mkdirSync("./Basics/FileSystem2") ;

//IV. To rename a file -

// fs.rename() method renames the specified file.
// Renames the file from oldPath to newPath. Returns undefined.

// Renaming "demo2.txt" to "demo3.txt" -

fs.renameSync("./Basics/FileSystem/demo7.txt", "./Basics/FileSystem/demo8.txt") //takes two argument 1st oldPath to newPath & It Returns undefined i.e function returns the void.

// Async Renaming - Renaming from "mynewfile1.txt" to "myrenamedfile.txt":

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//       if (err) throw err;
//       console.log('File Renamed!');
//     });

//V. fs.open() -

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

