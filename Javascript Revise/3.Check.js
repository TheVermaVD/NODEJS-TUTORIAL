




function inp(arr){

    let max = -Infinity ;
    let min = +Infinity ;
    for(let i=0; i<arr.length; i++){
        // console.log(i);
        // console.log(arr[i]);
        if(arr[i] > max){
            max = arr[i];
        }
        // console.log(max);

        if(arr[i] < min){
            min = arr[i]
        }
       
    }
    console.log(max);
    console.log(min);
    

}

inp([3,2,5,6, -2, -5]);

// --------------------------------------

/*  Q1. Given an array of size N. The task is to find the maximum and the minimum element of the array.

Input Format

n: size of array

arr[]={3,-1,2,5,4}

Constraints

1≤N≤10^5

-10^9≤arr[𝑖]≤ 10^9

Output Format

Output should be space seperated .

max element min element

5 -1

Sample Input -

7
1 -1 3 4 5 -5 9

Sample Output -

9 -5


*/

function processData(input) {

    let arr = input.split("\n");
    
    let arr2 = arr[1].split(" ").map(Number);
    
    // console.log(arr2);   
    // console.log(arr)
      // console.log(typeof arr)
    
    let max = -Infinity;
    let min = +Infinity;
    
    for(let i=0; i<arr2.length; i++){

        // console.log(` ${i} - ${arr2[i]}`);
        if(arr2[i] > max)  
            max = arr2[i];
        
        if(arr2[i] < min)
            min = arr2[i];
        
    }
    
    console.log(max+" "+min)
    
} 

/*  Q2. Array of integers 'arr' taken as input which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Input Format

n: size of array

x: Target Value

arr[]={-1,2,3,4,5}

Constraints

0≤N≤10^5

x: may or may not be in arr.

-10^9≤arr[𝑖]≤ 10^9

NOTE: 'arr' must be strictly increasing

Output Format

If found then return its index as per zero based indexing

If not present then return -1

Sample Input -

6
9
-1 0 3 5 9 12

Sample Output -

4

*/
function processData(input) {
    //Enter your code here
     
    let arr = input.split("\n");
    // console.log(arr);
    let arr2= +arr[1];
    let arr3= arr[2].split(" ").map(Number);
    
    // console.log(arr2, typeof arr2);
    // console.log(arr3, typeof arr3);
    let index = -1 ;
    for(let i=0; i<arr3.length; i++){
        
        // console.log(`${i} - ${arr3[i]}`);
        if(arr3[i]=== arr2){
            index=i; //O(n) - Linear Search - Time complexcity, Want Binary Search - O(log n) runtime complexity.
            break;
        }
    }
    console.log(index);
} 


// OTher -

let [first, second, third] = [...input.split("\n")] ;
//console.log(first, typeof first); //string
//console.log(second, typeof second); //string
//console.log(third, typeof third); //string

let arr = third.split(" ").map(parseFloat);
// let arr = third.split(" ").map(Number);
// console.log(arr);

let index = -1;
for(let i in arr){
    // console.log(`${i} - ${arr[i]}`);
    if(arr[i] ===  +second){
        index = i;
    }

}
console.log(index);