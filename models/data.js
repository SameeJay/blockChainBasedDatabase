import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  data: { type: Object, required: true },
  blockHash: { type: String, required: true }, // hash of the block
});

const Data = mongoose.model("Data", dataSchema, "ActualData");
export default Data;
