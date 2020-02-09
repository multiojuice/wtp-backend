import uuid from 'uuid/v4';
import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('logins');

    const data = req.body;
    data.id = uuid();
    const result = await collection.update({username: data.username}, data, {upsert: true});
    resp.json({id: data.id});
}