import dbConnect from "../../../server/utils/dbConnect";
import Task from "../../../server/models/task";
dbConnect();

export default async function tasks(req, res) {
  if (req.method === "DELETE") {
    await Task.findByIdAndDelete(req.query.taskId);
    const list = await Task.find({});
    return res.status(200).json({ message: "Task deleted successfully", list });
  } else if (req.method === "GET") {
    const target = await Task.findById(req.query.taskId);
    return res.status(200).json({ target });
  } else if (req.method === "PUT") {
    const target = await Task.findById(req.query.taskId);
    target.title = req.body.input;
    await target.save();
    const list = await Task.find({});
    return res.status(200).json({ list });
  }
}
