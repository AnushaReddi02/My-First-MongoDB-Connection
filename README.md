# My First MongoDB Connection

This project contains my very first MongoDB connection setup using **Node.js** and **Mongoose**.  
It connects to a local MongoDB server running on **127.0.0.1:27017** and includes clear comments explaining each part of the connection string.  
This repository marks the beginning of my MongoDB backend development journey.

---

## 🚀 How to Run

1. Install dependencies:
   ```
   npm install mongoose
   ```
2. Run the project:
   ```
   node index.js
   ```
## 📡 Connection Details
The script connects to:
 ```
 mongodb://127.0.0.1:27017/test
 ```
127.0.0.1 → Localhost (your own machine)

27017 → Default MongoDB port

test → Database name (created automatically when storing data)

## ✔️ Output

Below is the output after running the script:

Replace output.png with your actual screenshot filename after uploading it to GitHub.

## 📘 Purpose

To understand how Mongoose connects to MongoDB

To learn the structure of a MongoDB connection string

To create a clean starting template for future backend projects

## Project Structure
MONGO/
│── index.js
│── package.json
│── package-lock.json
└── node_modules/

