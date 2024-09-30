//1. USe of CommonJS Module in NOdejs -

const accessed = require("./1.CommonJS") ; //Accessing as an object name 'accessed', Here we Provided local module path name or core module name.

// NOte : AS we receiving an object from export file, so we can dirctly do the object destrcuting to hold the value here -

// const {pi, mul} = require("./1.CommonJS") ;
const {piVar, mulFn} = require("./1.CommonJS") ; //To see suggestion of inbuilt module in require function use : ctrl+space


console.log(piVar);
console.log(mulFn(2,4));


// import { sum2, diff2 } from "./2.ECMAJS.js"; //For imorting ECMAJS file

console.log(accessed); // We getting an object having exported variables as property names and correspoding values as exported values.

// console.log(accessed.sum_hai(5,8)); //using exported sum_hai variable from object 'accessed'
// console.log(accessed.diff(5,1)); //using exported diff variable from object 'accessed'


// Basic Printing -
console.log("Prakash")
console.log("Rowdy");

// Condition -
var x='20';  

if(x===20){
    console.log("Matched");
    
} else console.log("UnMatched");

// for-loop
for(i=0; i<10; i++){
    console.log(i);
    
}




// console.log(a())
// console.log(b());

// function a(){
    
//     return "A";
// }

// var b = ()=> {

//     return "B";

// }


