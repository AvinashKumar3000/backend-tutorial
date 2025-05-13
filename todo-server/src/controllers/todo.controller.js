const TodoModel = require("../models/todo.model");

async function addData(req, res) {
  try {
    const payload = req.body;
    const { title, desc, tags } = payload;
    await TodoModel.create({ title, desc, tags });
    res.json({
      success: true,
      message: "data created successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}

async function getAllData(req, res) {
  try {
    const items = await TodoModel.find({});
    res.json({
      success: true,
      message: "got your data",
      data: items,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}

async function updateData(req, res) {
  try {
    const payload = req.body;
    const { id, title, desc, tags } = payload;
    const todoObject = await TodoModel.findById(id);
    if (todoObject === null) {
      throw new Error("data with id not found");
    }
    if (title) todoObject.title = title;
    if (desc) todoObject.desc = desc;
    if (tags) todoObject.tags = tags;
    await todoObject.save();

    res.json({
      success: true,
      message: "data updated successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}

async function deleteData(req, res) {
  try {
    const id = req.params.id;
    await TodoModel.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "data deleted successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  addData,
  getAllData,
  updateData,
  deleteData,
};
