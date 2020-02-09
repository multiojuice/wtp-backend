import uuid from 'uuid/v4';
import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('events');
    const students = db.collection('students');
    const publicSchools = db.collection('public-schools');

    const data = req.body;
    data.id = uuid();
    if (!data.students) data.students = [];
    if (data.students.length == 0) {
        const student = await students.find(
            { tags: { $in: data.tags } }
          ).toArray();
          student.forEach(({id}) => {
            data.students.push(id)
          })
    }
    console.warn(data.students);


    const result = await collection.update({id: data.id}, data, {upsert: true});
    const ownerResult = await publicSchools.update({id: data.owner}, {'$addToSet': {events: data.id}});
    data.students.forEach(async (element) => {
        console.warn('HERE')
        const universitiesResult = await students.update({id: element}, {'$addToSet': {events: data.id}});
    });

    resp.json({success: true});
}