import * as studentRepository from "../repositories/students.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export const getAllStudents = async (req, res, next) => {

    const allStudents = await studentRepository.getAllStudents();
    res.json(allStudents);
    if (allStudents.length === 0) {
      throw new HTTPError(404, "No students found")
      }

    res.status(200).json(allStudents);
};

export async function getSingleStudent(req, res, next) {

    const id = req.params.id;
    const student = await studentRepository.getStudentById(id);

    if (student) {
      return res.status(200).json(student);
    } 
    throw new HTTPError(404, "Student not found");
}

export const createStudent = async (req, res, next) => {
    const { name, house } = req.body;

    if (!name || !house) {
      throw new HTTPError(400, "Missing required fields: name and house");
    }

    // Hvis vi skal bestemme en bestemt alder på student
    if (age && age < 11) {
      throw new HTTPError(400, "Student must be at least 11 years old");
    }

    const exists = await studentRepository.studentExists(name, house);
    if (exists) {
      throw new HTTPError(409, "Student already exists in this house");
    }

    await studentRepository.createStudent(name, house);
    res.status(201).json({
      message: "Student created",
    });
};

export const updateStudent = async (req, res, next) => {
    const { id } = req.params;
    const { name, house } = req.body;
    const rowCount = await studentRepository.updateStudent(id, name, house);

    if (rowCount === 0) {
      throw new HTTPError(404, "Student not found");
    }

    res.status(200).json({
      message: "Student updated",
    });

};

export const deleteStudent = async (req, res, next) => {
    const { id } = req.params;
    const rowCount = await studentRepository.deleteStudent(id);

    if (rowCount === 0) {
      throw new HTTPError(404, "Student not found");
    }

    res.sendStatus(204);
};
