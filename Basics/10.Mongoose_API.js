

// Mongoose library : Mongoose is an Object Data Modeling(ODM) library for Nodejs. It makes store our datbase in form of javascript object for easy operation.

//Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

const mongoose = require('mongoose');
const {Schema} = mongoose;
// OR, mongoose.Schema
//DB Connection -

// mongoose.connect('mongodb://127.0.0.1:27017/test'); //local mongodb data connection string //test is the default <database name>

// mongoose.connect("mongodb://localhost:27017/eCommerce"); //here 'eCommerce' is the one database under our MongoDB database.


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/eCommerce');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  console.log("Connected To MongoDB Database Succefully!")
}


// Schema In Mongoose : Scheme is the bluprint of our collection data how it will be. A schema defines the structure of your collection documents. A Mongoose schema maps directly to a MongoDB collection.


//Let's Create a Schema for mongoose for our database -

const productsSchema = new Schema({ //Schema is Construction function for creating collection.

  title: String, // String is shorthand for {type: String}
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  images: [String]
});

//The permitted SchemaTypes are ie Its datatype allowed by mongoose are: String, Number, Date ,Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map UUID .


//Let's Create A Model from the Schema blueprint -
const Product = mongoose.model("Product", productsSchema); //this prodcut2 is a collection of all the schema data.


//USing ExpressJS - Creating RESTfull API -
const express = require("express");
const server = express();

//READ -
server.get('/products', async (req, res)=>{

  const products = await Product.find({price : {$gt:10}});
  res.send(products)


})

server.listen(8009, ()=> console.log("Server started at port 8009!"))


