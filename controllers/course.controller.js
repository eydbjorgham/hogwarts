import * as courseRepository from "../repos/course.repo.js";

export const getAllCourses = async (req, res) => {
  try {
    const allCourses = await courseRepository.getAllCourses();
    res.json(allCourses);
    if (allCourses.length === 0) {
      return res.status(404).json({
        error: "Courses not found",
      });
    }
    res.status(200).json(allCourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Database error",
    });
  }
};

export async function getSingleCourse(req, res) {
  try {
    const id = req.params.id;
    const course = await courseRepository.getCourseById(id);

    if (course) {
      res.status(200).json(course);
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

export const createCourse = async (req, res) => {
  try {
    const { name, teacher } = req.body;
    await courseRepository.createCourse(name, teacher);
    res.status(201).json({
      message: "Course created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Database error",
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, teacher } = req.body;
    const rowCount = await courseRepository.updateCourse(id, name, teacher);

    if (rowCount === 0) {
      return res.sendStatus(404);
    }

    res.status(200).json({
      message: "Course updated",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Database error",
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const rowCount = await courseRepository.deleteCourse(id);

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

export const addStudentToCourse = async (req, res) => {
  try {
    const { courseId, studentId } = req.params;

    console.log("courseId:", courseId, "studentId:", studentId);

    await courseRepository.addStudentToCourse(courseId, studentId);
    res.status(201).json({ message: "Student added to course" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const removeStudentFromCourse = async (req, res) => {
  try {
    const { courseId, studentId } = req.params;
    const rowCount = await courseRepository.removeStudentFromCourse(courseId, studentId);
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

export const updateCourseTeacher = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { teacherId } = req.body;
    const rowCount = await courseRepository.updateCourseTeacher(courseId, teacherId);
    if (rowCount === 0) {
      return res.sendStatus(404);
    }
    res.status(200).json({ message: "Teacher updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Database error",
    });
  }
};
