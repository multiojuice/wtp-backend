import uuid from 'uuid/v4';
import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('public-schools');

    const data = req.body;
    data.id = uuid();
    data.events = []
    const result = await collection.update({}, data, {upsert: true});

    resp.json({success: true});
}