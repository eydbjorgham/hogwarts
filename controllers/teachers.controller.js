import * as teacherRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling/HTTPError.js"

export const getAllTeachers = async (req, res, next) => {

    const allTeachers = await teacherRepository.getAllTeachers();
    if (allTeachers.length === 0) {
      throw new HTTPError(404, "No teachers found");
      }
    
    res.status(200).json(allTeachers);
};

export const getSingleTeacher = async (req, res) => {

    const id = req.params.id;
    const teacher = await teacherRepository.getTeacherById(id);

    if (teacher) {
      return res.status(200).json(teacher);
    }
    throw new HTTPError(404, "Teacher not found");
}

export const updateTeacher = async (req, res, next) => {
    const { id } = req.params;
    const { name, house_id } = req.body;

    if (!isValidHouseId(house_id)) {
      throw new HTTPError(422, "Invalid house_id format");
    }

    const rowCount = await teacherRepository.updateTeacher(id, name, house_id);

    if (rowCount === 0) {
      throw new HTTPError(404, "Teacher not found");
    }

    res.status(200).json({ 
        message: "Teacher updated" 
    });
};

export const createTeacher = async (req, res) => {
    const { name, house } = req.body;

    if (!name || !house) {
      throw new HTTPError(400, "Missing required fields: name and house");
    }

    const existingTeacher = await teacherRepository.getTeacherById(email);
    if (existingTeacher) {
      throw new HTTPError(409, "Email already exists");
    }

    await teacherRepository.createTeacher(name, house);
    res.status(201).json({
      message: "Teacher created",
    });
};

export const deleteTeacher = async (req, res) => {
  
    const { id } = req.params;
    const rowCount = await teacherRepository.deleteTeacher(id);

    // if (success) return res.sendStatus(204);

    if (rowCount === 0) {
      throw new HTTPError(404, "Teacher not found");
    }

    res.sendStatus(204);
};