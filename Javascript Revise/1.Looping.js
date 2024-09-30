// 1. Over an string -

let str = "Buzz" ;
let str2 = `Buzz hai bhai` ;

console.log(str+ str2);

console.log("\"Prakash\"");

let A = 2;
console.log("The value of A is " , A); // Provides a auto space
console.log("The value of A is " + A); 

let ch3 = 3;
let total= "The value of ch is " + ch3; 
let total2=ch3+" Ram";

console.log(total,total2);
console.log(typeof total, typeof total2);

let car="suzuki";
let car2="yamaha";
let space=" ";

console.log(car,car2); //Auto Provides a space 
console.log(car+car2); // Concatenation doesnot Provide a space 


console.log(car+space+car2);
console.log(car,space,car2);

console.log(car+" "+car2);

console.log(typeof str);

for(let i=0; i<str.length; i++){
    console.log(i);
    console.log(str[i]);
    
    
}


// 2. Over an array element -

let arr = ["2", 5, "Ram"];
for(let i=0; i<arr.length; i++){
    console.log(i);
    console.log(arr[i]);
    
    
}