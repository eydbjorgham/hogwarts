import * as studentRepository from "../repos/student.repo.js";

export const getAllStudents = async (req, res) => {
  try {
    const allStudents = await studentRepository.getAllStudents();
    res.json(allStudents);
    if (allStudents.length === 0) {
      return res.status(404).json({
        error: "Students not found",
      });
    }
    res.status(200).json(allStudents);
  } catch (error) {
    console.log(error);
    res.status(500).json({ 
        error: "Database error",
    });
  }
};

export async function getSingleStudent(req, res) {
  try {
    const id = req.params.id;
    const student = await studentRepository.getStudentById(id);

    if (student) {
      res.status(200).json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        error: "Database error",
    });
  }
}

export const createStudent = async (req, res) => {
  try {
    const { name, house } = req.body;
    await studentRepository.createStudent(name, house);
    res.status(201).json({
      message: "Student created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        error: "Database error",
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, house } = req.body;
    const rowCount = await studentRepository.updateStudent(id, name, house);

    if (rowCount === 0) {
      return res.sendStatus(404);
    }

    res.status(200).json({
      message: "Student updated",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        error: "Database error",
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const rowCount = await studentRepository.deleteStudent(id);

    if (rowCount === 0) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        error: "Database error",
    });
  }
};
