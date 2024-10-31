import fs from "fs/promises"; // Import promises version of fs
import mongoose from "mongoose"; // Import mongoose library
import Data from "../models/data.js"; // Import database model file

const dbName = "BlockChainDB"; // Database name selection

// Connect to MongoDB
async function connectDatabase() {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`);
    console.log("DataBase connected");
  } catch (err) {
    console.error("DataBase connection error:", err);
  }
}

// Read and save data to the mongoDB database
async function saveTextData(filePath, blockHash) {
  try {
    const fileData = await fs.readFile(filePath, "utf-8");

    const newData = new Data({
      data: { content: fileData },
      blockHash: blockHash, // Link the saved data to a specific block in blockchain
    });

    await newData.save();
    console.log("Data saved successfully:", newData);
  } catch (error) {
    console.error("Error saving data:", error);
  } finally {
    mongoose.connection.close();
  }
}

export { connectDatabase, saveTextData };
