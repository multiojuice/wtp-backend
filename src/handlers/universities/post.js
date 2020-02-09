import uuid from 'uuid/v4';
import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('universities');

    const data = req.body;
    data.students = []
    const result = await collection.update({name: data.name}, data, {upsert: true});

    resp.json({success: true});
}