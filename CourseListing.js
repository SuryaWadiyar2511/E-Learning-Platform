import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "React for Beginners", instructor: "John Doe" },
  { id: 2, title: "JavaScript Mastery", instructor: "Jane Smith" },
];

const CourseListing = () => {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link> - {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;
