import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('logins');
    const result = await collection.deleteMany({});

    resp.json(result);
}