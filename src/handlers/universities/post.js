import mongo from '../../mongo';

export default async (req, resp) => {
    const db = await mongo;
    const collection = db.collection('universities');

    const data = req.body;
    data.students = []
    const result = await collection.update({name: data.name}, data, {upsert: true});

    console.warn(result)
    resp.send(200);
}