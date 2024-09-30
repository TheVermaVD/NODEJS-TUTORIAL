
/* What is URL : Uniform resource locator for accessing the data/information from client side server. A URl looks like this -

https://wwww.piyushgarg.dev/project/1?userid=1&pw=232#SomewhereInTheDocument 

Whrere,


#1. Protocol/Scheme : Here 'https' is the protocol of above URL.


Protocol tells how to cummunicate with server, Protocol is a set of rules defined to tell browser that how to communate with its respective server. It is of two type i.e http(unsecured) and https especially for communicating with websites. 

The first part of the URL is the scheme, which indicates the protocol that the browser must use to request the resource 

A protocol is a set method for exchanging or transferring data around a computer network). 

Other schemes i.e a diffent protocol which is browsers also know how to handle such as mailto: (to open a mail client), so don't be surprised if you see other protocols.



#2. Domain/myServer : https://wwww.piyushgarg.dev/project/1?userid=1&pw=232 

Here 'wwww.piyushgarg.dev' is the domain or server of above URL.


Domain is user friendly name of our web server IP adresss, we basically buy a domain for our web server IP adresss and that domain point out to the our IP address of our server.

As we have or created server each website so all of these website have the first IP adress of respective webserver by which we can visit the website but remembering the IP addrss for each server is bit problemactic so we buy a domain for the each respetive IP adress of our server and then IP adress point to that bought domain.

*A Domain or Server can look like this as well -

https://wwww.example.com:443/path/1?key1=value1&key2=value2 

https://wwww.piyushgarg.dev:443/project/1?userid=1&pw=232 

After Protocol https/http we have domain which is separated from protocol by the character pattern ://. Sometimes after domain name there can be port number for respective protocol(80), separated by a colon:

Port Number : It is usually omitted if the web server uses the standard ports of the HTTP protocol (80 for HTTP and 443 for HTTPS) to grant access to its resources. Otherwise it is mandatory.


#3.  Path or Path to the file :

https://wwww.piyushgarg.dev/project/1?userid=1&pw=232 

Here 'project/1' is the nested path name which can be direct path name as well like /about .

wwww.piyushgarg.dev/   - here / is the homapage or root path of piyushgarg website

wwww.piyushgarg.dev/about-----------  these are the respective path of the our  server or domain
wwww.piyushgarg.dev/contact-us

wwww.piyushgarg.dev/project/1    - /project/1  is  a nested path here.

Thus, With path or nested path we can able to tell our server how to react on respective path hit by user/client.


#4.  Query Paramterrs : https://wwww.piyushgarg.dev/project/1?userid=1&pw=232 

Here, 'userid=1&pw=232' is the query parameter of above url which is starts after path name with question mark(?) and query paramter separated with & .

//Query parameters are a list of key/value pairs separated with the & symbol .

It is the extra information which we pass to URL to seek more detail information.

wwww.piyushgarg.dev/about?userid=1&pw=232

It is sepated with ? in URL means after pathurl we use ? to use query paramters. In other words, after ? in URL known as query parameters.

Query Paramters we usually get from frontend side by user input like form-fillup or enquiry something by user by entering some input on frontend side.

Query Paramterts accept the key-value pair can seperated with & .

  

E.g: if we searched for javscript interview question, we generally get this type of URL -

https://www.google.com/search?q=javascript+interview+questions&sca_esv=449428b1edf18ef7&sca_upv=1&sxsrf=ADLYWIJKN-dxtpcdpHk0r6Coejq8EFVTRw%3A1725860584699&ei=6IreZtKvKq2hseMP-vex2Qw&oq=javascript+inte&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2phdmFzY3JpcHQgaW50ZSoCCAAyDhAAGIAEGJECGLEDGIoFMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgsQABiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESNEdUOoDWLwVcAF4AZABAJgB7QGgAZkRqgEFMC4yLji4AQPIAQD4AQGYAgigAq4NwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgoQIxiABBgnGIoFwgIKEAAYgAQYFBiHAsICCxAAGIAEGIYDGIoFwgIIEAAYogQYiQXCAgoQABiABBhDGIoFwgIIEAAYgAQYsQPCAg0QABiABBixAxgUGIcCwgILEAAYgAQYsQMYgwGYAwCIBgGQBgqSBwUxLjAuN6AH5Ec&sclient=gws-wiz-serp

Here, https -->  tells we called in https protocol i.e on https scheme
     www.google.com -->  tells we called to www.google.com domain i.e on server.

/search --> It is tells that on which path we searching information.

?q=javascript+interview+questions&.... --> It is the query paramter(define in key-value pair seprated with &) where user seeking some inforamtion from server so once server reads it after entering into /search file then it look for the asked data from database and if found returned the matched data to user or returned 404 or error.



#5.  Anchor :  It is part denotes the bookmarked of respective webpage.

https://wwww.piyushgarg.dev/project/1?userid=1&pw=232&search=javascript+2024+questions#SomewhereInTheDocument

Here, 'SomewhereInTheDocument' is the anchor name of above URL, which start with # symbol.

#SomewhereInTheDocument is an anchor to another part of the resource itself. An anchor represents a sort of "bookmark" inside the resource, giving the browser the directions to show the content located at that "bookmarked" spot. On an HTML document, for example, the browser will scroll to the point where the anchor is defined; on a video or audio document, the browser will try to go to the time the anchor represents. 

Note: #, also known as the fragment identifier, is never sent to the server with the request.

*/







const url = require("url"); //to work with url resolution and parsing all url data like query parameter and others.


//if URL module is not present in nodejs inbuilt module then install from the npm : npm install url

// #URL Module : We use url module of nodejs to work of URL resolution and parsing.

// URL always in the string format and A URL string is a structured string containing multiple meaningful components.

// The url.parse(urlString, Optional1, Optinal2) method takes 1st argument as a URL string, parses it, and returns a URL object containing properties for each of these components.

// Pass true as the second argument to also parse the query string using the querystring module. Defaults to false.

// Pass true as the third argument to treat //foo/bar as { host: 'foo', pathname: '/bar' } rather than { pathname: '//foo/bar' }. Defaults to false.


const fs = require("fs");
const http = require("http");


const webserver = http.createServer((req, res)=>{

    if(req.url === "/favicon.ico") return res.end();
  
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);


    const urlPath="urlPath of server: "+ req.url+"\n" ;

    fs.appendFile("Basics/HTTP Module/log2.txt", urlPath, (err)=>{

        console.log("File has appended");

        switch(myUrl.pathname){

            case "/": 
                res.end("This is HomePage");
                break;

            case "/about" :

                res.end(`This is About Page, Hi ${myUrl.query.username} `);
                break;

            case "/search": //for different filename or pathname
                
                res.end(`The Searched by user is : ${myUrl.query.search_query}`);
                break;

            default :
            res.end("Page Not Found..!")    

        }
    

    })
   


})

webserver.listen(8003, ()=> console.log("Server Started on 8003"));
















