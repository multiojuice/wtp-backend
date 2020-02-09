import uuid from 'uuid/v4';
import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('public-schools');

    const data = req.body;
    data.events = []
    const {result} = await collection.update({id: data.id}, data, {upsert: true});

    resp.json({success: true});
}