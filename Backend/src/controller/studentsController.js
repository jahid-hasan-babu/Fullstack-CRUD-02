const StudentsModel = require("../model/StudentModel");

//Create
exports.CreateStudent = async (req, res) => {
  try {
    let reqBody = req.body;
    let result = await StudentsModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};

//Read
exports.StudentsList = async (req, res) => {
  try {
    let result = await StudentsModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: error.toString() });
  }
};

//Read Student by Id
exports.StudentById = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let result = await StudentsModel.find(query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: result });
  }
};

//Update student by id
exports.UpdateStudent = async (req, res) => {
  try {
    let id = req.params.id;
    let reqBody = req.body;
    let query = { _id: id };
    let result = await StudentsModel.updateOne(query, reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "fail", data: result });
  }
};

//Delete student
exports.DeleteStudent = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let result = await StudentsModel.deleteOne(query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    rea.status(200).json({ status: "fail", data: result });
  }
};
