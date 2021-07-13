import { MongoClient } from "mongodb";

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
if (!DB_USER || !DB_PASS || !DB_HOST) throw new Error("Missing DB credentials");

let mongo: MongoClient | null = null;
export async function connectToMongo() {
  if (!mongo?.isConnected()) {
    const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
    mongo = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return mongo;
}

export const env = {};
