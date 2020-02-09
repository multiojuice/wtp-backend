import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    console.warn('DOG', db);
    const collection = db.collection('universities');

    const result = await collection.find({}).toArray();
    
    console.warn(result)
    resp.json(result);
}