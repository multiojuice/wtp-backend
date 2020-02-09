import {MongoClient} from 'mongodb';
import assert from 'assert';

const client = new MongoClient('mongodb://localhost:27017/');

const getDb = async () => {
  const error = await client.connect();
  const temp = client.db('WTP');
  return temp;
}

const db = getDb();

export default db;