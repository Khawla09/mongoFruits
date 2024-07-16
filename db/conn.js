//
const mongoose = require("mongoose");
const conn = () => {
  //   console.log(process.env.MONGO_URI);
  try {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.once("open", () => {
      console.log("connected to mongoDB");
    });
  } catch (error) {
    console.error("Something went wrong with DB " + error.message);
  }
};

module.exports = conn;

// const mongo = require("mongodb");
// const MongoClient = mongo.MongoClient;
// const connectionString = process.env.MONGO_URI;
// const client = new MongoClient(connectionString);
// let conn;
// try {
//   conn = await client.connect();
// } catch (error) {
//   console.error(error);
// }
// const db = conn.db("Sample Training");
// module.exports = db;
