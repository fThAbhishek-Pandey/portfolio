import mongoose from "mongoose";
console.log ("db url ", process.env.mongo_url);
// 
const ConnectionDB = async ()=>{
  console.log("I am called");
  mongoose.connect(process.env.mongo_url);
const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error connecting to database");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});
}
export default  ConnectionDB;