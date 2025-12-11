const mongoose = require('mongoose');
// MongoDB connection string breakdown:

//mongoose.connect('mongodb://127.0.0.1:27017/test');

// Format: mongodb://<host>:<port>/<databaseName>

// 1. 'mongodb://' 
//    ➝ This tells the driver (like Mongoose) that we are connecting to a MongoDB database.

// 2. '127.0.0.1'
//    ➝ This is the local IP address of your own computer (localhost).
//    ➝ Means: MongoDB server is running on *your machine*, not on the cloud.

// 3. ':27017'
//    ➝ This is the default port number for MongoDB.
//    ➝ Unless you change it manually, MongoDB always listens on port 27017.

// 4. '/test'
//    ➝ Name of the database you want to connect to.
//    ➝ If it doesn't exist, MongoDB automatically creates it when you insert the first document.

// Final meaning:
// "Connect to the MongoDB server running locally on my computer at port 27017,
//  and use the database named 'test'."

main()
  .then(()=>{
    console.log("Connection successful!!!!");
  })
  .catch((err)=>{
    console.log("There's an error connecting to mongodb",err);
  })

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


