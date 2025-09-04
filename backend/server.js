import express from "express";
import { config } from "dotenv";

import { MongoClient } from "mongodb"; 
import bodyparser from "body-parser";
import cors from "cors";
// or as an es module:
// import { MongoClient } from 'mongodb'
config();
// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "passop";
const app = express();
const port = 3000;
app.use(express.json()); 
app.use(bodyparser.json())
app.use(cors())

client.connect();
const db = client.db(dbName);

console.log(process.env.MONGO_URI);

//Get all the password

app.get("/", async (req, res) => {
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

//save all the password

app.post("/", async (req, res) => {
  const password = req.body
  const db = client.db(dbName)
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.send({success: true,result: findResult});
});

// delete password by id

app.delete("/", async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  res.send({success: true,result: findResult});
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:3000${port}`);
});
