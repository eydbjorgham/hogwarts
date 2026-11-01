import * as teacherRepository from "../repos/teacher.repo.js";

export const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await teacherRepository.getAllTeachers();
    res.json(allTeachers);
    if (allTeachers.length === 0) {
      return res.status(404).json({
        error: "Teacher not found",
      });
    }
    res.status(200).json(allTeachers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ 
        error: "Database error",
    });
  }
};

export const getSingleTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const teacher = await teacherRepository.getTeacherById(id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        error: "Database error",
    });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, house_id } = req.body;
    const rowCount = await teacherRepository.updateTeacher(id, name, house_id);

    if (rowCount === 0) {
      return res.sendStatus(404);
    }

    res.status(200).json({ 
        message: "Teacher updated" 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        error: "Database error", 
    });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const { name, house } = req.body;
    await teacherRepository.createTeacher(name, house);
    res.status(201).json({
      message: "Teacher created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        error: "Database error",
    });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const rowCount = await teacherRepository.deleteTeacher(id);

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