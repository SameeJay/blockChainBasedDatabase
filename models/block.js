import mongoose from "mongoose";
import { connectDatabase } from "../scripts/saveData.js";

const blockSchema = new mongoose.Schema({
  index: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  dataHash: { type: String, required: true }, // hash of the actual data
  prevHash: { type: String, required: true }, // hash of the previous block
  creatorNode: { type: String, required: true },
});

const Block = mongoose.model("Block", blockSchema, "blockData");
export { Block };

//--------------------Testing this Module-----------------------

connectDatabase();

const newBlock = new Block({
  index: 1,
  dataHash: '1001',
  prevHash: '1000',
  creatorNode: 'Sameera',
});

newBlock.save()
.then(()=>{console.log(newBlock)})
.catch((err)=>{console.log(err)});
