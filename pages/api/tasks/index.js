import dbConnect from "../../../server/utils/dbConnect";
import Task from "../../../server/models/task";
dbConnect();

export default async function tasks(req, res) {
  if (req.method === "POST") {
    await Task.create({ title: req.body.input });
    const list = await Task.find({});
    return res.status(201).json({ list });
  } else if (req.method === "GET") {
    const list = await Task.find({});
    return res.status(200).json({ list });
  }
}
