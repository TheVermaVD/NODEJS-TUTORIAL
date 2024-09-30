
/*  Module In NodeJs : In NodeJs each file can be called as an module i.e each nodejs file refers as an module means module have some information which we later want to access at some other Js file or at module.

Moduling means spiliting the code into multiple parts.

We devide out codes into small small code and keep each logic or unique logic in one file that file known as module and this methodlogy known as moduler Programming.

Each module code are provide to own like someone outside of current module/file wants to access any code of other module cant able to access as tht module code is private not made public as of now.. So to make module public i.e now anyone can use our current module file outside, we need to export those variable which we want to make it pubic with, module object having the exports property which holds the exports all data we need for exporting -

module.exports = { var1, var2, var3 } ;


So to access any pubic module node code to other module, we need to use require() function to import the file from another modules. In require() function we can give local module path or nodejs inbuilt module name directly which search inbuilt module name from the nodejs module directory as our local path directory we providing.

require("./fs") ;  require("fs")

./fs  -- indicates in current local directory of fs file

fs -- indicates node js module director of fs file where it searches.

./  -- indicates current local directory/i.e ssearch in current local directory.

Whatever we code in a file which is protected by a module and to access module we need to export and import to access the module file at some other file.



There are many NodeJs inbuilt module : Node.js has a set of built-in modules which you can use without any further installation.

Core MOdule of NodeJs : It is two type Global and Non-global -

Global Module : console, exports, require (does not need to import)

Non-global Module : fs, Buffer, http  (need to import first to use)

External Module : which is not develpoed by NodejS but can be used in nodeJS.



# Modules in NodeJS : -
In Node.js, a module is essentially a reusable block of code that can be used to perform a specific set of tasks or provide a specific functionality. A module can contain variables, functions, classes, objects, or any other code that can be used to accomplish a particular task or set of tasks.

The primary purpose of using modules in Node.js is to help organize code into smaller, more manageable pieces. A modules can then be imported at any time and used flexibly which helps in creating reusable code components that can be shared across multiple projects.


There are two ways of Importing and Exporting Module/File In NodeJs -

1) CommonJs Module Way (Old Style ) : Where we export any Javascript variable, function name, object etc via 'exports' module of NodeJs, and we import the exported module i.e whole file with require() function which accepts one argument i.e either local module path name or nodeJS core module name directly.

like this -
*/

//Export way i) : Default export or Single Export file which replaces the previous export files - 

const pi = 3.142 ;

const mul = (a,b)=> a*b;

//  module.exports = "We are rowdy" ; //random we added the text to exports property for this file .

//  module.exports = <variable_name> ; 
//  module.exports = pi; //It will over-rides the previous values as we assigned the new value to exports here.To avoid this we pass all the variabl as js single object -

module.exports = { pi, mul } ; // also replacing 

// For renaming from here -

module.exports = {
    piVar : pi,
    mulFn : mul,
}

// NOte : module.exports overrides the previus value assigned in exports variable. (Single File export i.e default export)
// Note : exports.var_name that can use to export multiple files which does not overides prev value. (Multiple file exports)


// Export Way ii) : Using directly the exports object/ Multiple Export File -

function sum(a,b){
    return a+b;
}

exports.sum_hai = sum ;

// exports.new_variable_Name = assign_export_variable_here ; //Here, we defined one new property to exports module/object and assigned the sum variable to it.

// Note : exports is NodeJs Global module which is acts like object.

//// Export Way iii) : We can also export variable in CJS like this -

 exports.diff = (a,b)=> {
    return a-b ;
}


















