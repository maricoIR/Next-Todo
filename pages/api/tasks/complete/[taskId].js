import dbConnect from "../../../../server/utils/dbConnect";
import Task from "../../../../server/models/task";
dbConnect();

export default async function tasks(req, res) {
  if (req.method === "PUT") {
    const task = await Task.findById(req.query.taskId);
    task.completed = !task.completed;
    await task.save();
    const list = await Task.find({});
    return res.status(200).json({ list });
  }
}
