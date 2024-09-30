

//MVC : It a way to structure and Manage our lengthy code in the folder Manner struture way. MCV makes code resuabiliy and scalibility.

// MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces (VIEW), data (MODEL), and controlling logic (CONTROLLER). It emphasizes a separation between the software's business logic and display.

// In Our Project this will be : Model - Database Schema's and Business logics and rules View - Server Side Templates (or React front-end) Controller - functions attached to routes for modifying request and sending responses. It's a link between the Model and View.

const express = require("express");
const server = express(); //server can be created once for our project



const {productRouter} = require("./routes/product-router.js"); 
const {userRouter} = require("./routes/users-routes.js"); 



// console.log(productController);

//Body_Parser Middle Ware -
server.use(express.json());

//Express Router Middleware to attach to main app Server -

// server.use("/api/v1", productRouter); //we can provide the option base path name for all the routes. To access : /api/v1/products   ---> OLD PATH

// server.use("/", productRouter); OR, server.use(productRouter); //default path name

// server.use("/products", productRouter); // made indepent of all methods routes i.e we can acces .get("/", cb) ; .get ("/:id", cb);  .put("/:id", cb)


server.use("/products", productRouter); //   ---->   NEW PATH 

server.use("/users", userRouter); //   ---->   New JSON Data 'BaseURL' Path


// The SiX-APIs :-

// server
// productRouter
//       .get("/products", productController.getProducts)
//       .get("/products/:id", productController.getProduct)
//       .post("/products", productController.createProduct)
//       .put("/products/:id", productController.replaceProduct)
//       .patch("/products/:id", productController.editProduct)
//       .delete("/products/:id", productController.deleteProduct); //Did the chaining on the server(now on 'productRouter') at once.

// Note : Here, we adding all the routes path to the main/direct server level of express i.e on direct with application level i.e we are adding routes which isnt sometimes good. We can create the express router then on router.METHOD() we can apply all HTTP methods.(But to active 'router' we have to use express middleware i.e express.Router() ; )

server.listen(8000, () => console.log("server started on 8000 Port!"));

// # MVC : Model View Controller. It is pattern way to write code in structure folder way for simplicity and more readable.

// Model : Generally Our Application Data where It stored or Manage e.g MongoDB or data.json here.// we keep Database in model folder

//View : To Show Data to client i.e View or SSR. /we keep template view folder

// Controller : Between Model and View all Logic hold by controller and do the  Interchange of logic between model and view. //we keep all logic in controller folder