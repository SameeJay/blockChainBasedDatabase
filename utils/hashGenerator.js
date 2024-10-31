import crypto from "crypto";

function generateBlockHash(blockData) {
  const hash = crypto.createHash("sha256"); // Create a SHA-256 hash object
  hash.update(JSON.stringify(blockData));
  return hash.digest("hex");
}

function generateDataHash(data) {
  const hash = crypto.createHash("sha256");
  hash.update(JSON.stringify(data));
  return hash.digest("hex");
}

export { generateBlockHash, generateDataHash };
