import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;

    const collection = db.collection('students');

    const result = await collection.find(req.query).toArray();
    
    resp.json(result);
}