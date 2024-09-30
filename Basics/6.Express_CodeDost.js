

const express = require("express"); //returns an function.

//Creating Server using ExpressJS is so easy -

const server1 = express(); //server1 created. //server start Part


//We write our code here for sending response to client -

server1.get("/", (req, res)=>{

    //i. Send string or HTML code -
    // res.send("Hello Prakash") ;//Sends the HTTP response(if sending string then send() method sets the Content-Type : "text/html" bydefault.)

        // res.sendFile("G:\My Work - Mphasis Laptop\NODEJS TUTORIAL\Basics\Web Server\Example\II.static.html") ; //Provide the file path 

        // res.json(); //for sending json data //Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

        
    /*
    NOte :  i) When the parameter is a String, the send() method sets the Content-Type to “text/html” by default -

        res.send('<p>some html</p>')


        ii) When the parameter is an Array or Object, Express responds with the JSON representation:

        res.send({ user: 'tobi' })
        res.send([1, 2, 3])
        
        iii) res.json([body])
        
        Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

        The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.

        res.json(null)
        res.json({ user: 'tobi' })
        res.status(500).json({ error: 'message' })


    
    */

        // res.status(code); //Sets the HTTP status for the response. It is a chainable alias of Node’s response.statusCode.

        //Can also send together -

            // res.status(403).end()
            // res.status(400).send('Bad Request')
            // res.status(404).sendFile('/absolute/path/to/404.png')

            // res.sendStatus(404);// can also send  status

            // res.status(201).send("Hey Prakash..........This is GET Method!")
            res.status(201).send({ye_hai : "Hey Prakash..........This is GET Method!"})
});


//Testing other HTTP Request methods on same end point/url with help of PostMan(which allowing us to send POST, PUT, PATCH, DELETE MEthods as well) -

//Web API or API / End Point / Route - all these we called below -
server1.post("/", (req, res) =>{

    res.send({ye_hai : "POST Method"})
})
server1.put("/", (req, res) =>{

    res.send({ye_hai : "PUT Method"})
})
server1.patch("/", (req, res) =>{

    res.send({ye_hai : "PATCH Method"})
})
server1.delete("/", (req, res) =>{

    res.send({ye_hai : "DELETE Method"})
})





// to listen the server on port -
server1.listen(8011, ()=> console.log("Server started on 8011")); //Server end part

