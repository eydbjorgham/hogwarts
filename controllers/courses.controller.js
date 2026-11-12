import * as courseRepository from "../repositories/courses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

let requestCount = 0;

export const getAllCourses = async (req, res, next) => {
  const allCourses = await courseRepository.getAllCourses();

  res.json(allCourses);
  if (allCourses.length === 0) {
    throw new HTTPError(404, "No courses found");
  }

  res.status(200).json(allCourses);
};

export async function getSingleCourse(req, res, next) {
  const id = req.params.id;
  const course = await courseRepository.getCourseById(id);

  if (!course) {
    throw new HTTPError(404, "Course not found");
  }
  res.sendStatus(404);
}

export const createCourse = async (req, res, next) => {
  const { name, teacher } = req.body;
  requestCount++;

  if (requestCount > 100) {
    throw new HTTPError(429, "Too many requests - try again later");
  }

  if (!name || !teacher) {
    throw new HTTPError(400, "Missing required fields: name and teacher");
  }

  const exists = await courseRepository.getCoursebyName(name); 
  if (exists) {
    throw new HTTPError(409, "Course with this name already exists");
  }

  await courseRepository.createCourse(name, teacher);
  res.status(201).json({
    message: "Course created",
  });
};

export const updateCourse = async (req, res, next) => {
  const { id } = req.params;
  const { name, teacher } = req.body;
  const rowCount = await courseRepository.updateCourse(id, name, teacher);

  if (rowCount === 0) {
    throw new HTTPError(404, "Course not found");
  }

  res.status(200).json({
    message: "Course updated",
  });
};

export const deleteCourse = async (req, res, next) => {
  const { id } = req.params;
  const rowCount = await courseRepository.deleteCourse(id);

  if (rowCount === 0) {
    throw new HTTPError(404, "Course not found");
  }

  res.sendStatus(204);
};

export const addStudentToCourse = async (req, res, next) => {
  const { courseId, studentId } = req.params;

  if (!courseId || !studentId) {
    throw new HTTPError(400, "Missing required parameters: courseId and studentId");
  }

  await courseRepository.addStudentToCourse(courseId, studentId);
  res.status(201).json({ message: "Student added to course" });
};

export const removeStudentFromCourse = async (req, res, next) => {
  const { courseId, studentId } = req.params;
  const rowCount = await courseRepository.removeStudentFromCourse(courseId, studentId);

  if (rowCount === 0) {
    throw new HTTPError(404, "Student not found in course");
  }

  const alreadyEnrolled = await courseRepository.isStudentEnrolled(courseId, studentId);
  if (alreadyEnrolled) {
    throw new HTTPError(422, "Student is already enrolled in this course");
  }

  res.sendStatus(204);
};

export const updateCourseTeacher = async (req, res, next) => {
  const { courseId } = req.params;
  const { teacherId } = req.body;

  if (!teacherId) {
    throw new HTTPError(400, "Missing required field: teacherId");
  }

  const rowCount = await courseRepository.updateCourseTeacher(courseId, teacherId);

  if (rowCount === 0) {
    throw new HTTPError(404, "Course not found");
  }
  res.status(200).json({ message: "Teacher updated" });
};
