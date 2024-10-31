import mongoose from "mongoose";
import { Block } from "../models/block.js";
import { generateBlockHash, generateDataHash } from "../utils/hashGenerator.js";
import { connectDatabase } from "../scripts/saveData.js";

async function createNewBlock(data, creatorNode) {
  try {
    const lastBlock = await Block.findOne().sort({ index: -1 });

    const prevHash = lastBlock ? lastBlock.dataHash : "0".repeat(64);

    const index = lastBlock ? lastBlock.index + 1 : 0;

    const newBlockData = {
      index: index,
      dataHash: generateDataHash(data),
      prevHash: prevHash,
      creatorNode: creatorNode,
    };

    const newBlock = new Block(newBlockData);

    await newBlock.save();
    console.log("New block created:", newBlock);
  } catch (error) {
    console.error("Error creating new block:", error);
  }
}

export { createNewBlock };

//--------------------Testing-----------------------
connectDatabase();
createNewBlock('Sample Data', 'Sameera Node-creator');
