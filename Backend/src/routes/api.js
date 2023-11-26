const express = require("express");
const router = express.Router();
const StudentsController = require("../controller/studentsController");

router.post("/create-studentList", StudentsController.CreateStudent);
router.get("/read-studentsList", StudentsController.StudentsList);
router.get("/read-oneStudent/:id", StudentsController.StudentById);
router.post("/update-student/:id", StudentsController.UpdateStudent);
router.delete("/delete-student/:id", StudentsController.DeleteStudent);

module.exports = router;
