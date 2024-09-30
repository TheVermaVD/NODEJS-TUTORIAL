
// 2) ECMASCRIPT(ES) Module Way : In Recent New Version of NodeJs, It started supporting ES Module as well. It is ECMAScript newly introduced module where we can export and import variables, function name, etc like Javascript - 

// Note : To run JS code exported via EJS way, then user must have to define  type property value as module like this - "type" : "module" in package.json file (where as imported file CJS doesnot need this that takes "tpye" : "commonjs" as bydefault value in package.json file if we define or not.) 

//"type" property can have two values "commonjs" for CJS or "moduel" for ECMAJS.

// Note : package.json file needed for NodeJS for managing files of the nodes.

function sum2(a,b){

    return a+b;
    
}

const diff2 = (a,b)=> {
    return a-b ;
}


export {sum2, diff2};