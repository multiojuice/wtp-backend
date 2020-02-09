import uuid from 'uuid/v4';
import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('students');
    const universities = db.collection('universities');

    const data = req.body;
    data.events = []
    const result = await collection.update({id: data.id}, data, {upsert: true});

    const universitiesResult = await universities.update({id: data.university}, {'$addToSet': {students: data.id}});

    resp.json({success: true});
}