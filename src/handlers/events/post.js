import uuid from 'uuid/v4';
import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('events');
    const students = db.collection('students');
    const publicSchools = db.collection('public-schools');

    const data = req.body;
    data.id = uuid();
    const result = await collection.update({id: data.id}, data, {upsert: true});
    const ownerResult = await publicSchools.update({id: data.owner}, {'$addToSet': {events: data.id}});
    data.students.forEach(async (element) => {
        const universitiesResult = await students.update({id: element}, {'$addToSet': {events: data.id}});
    });

    resp.json({success: true});
}