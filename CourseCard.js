import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.thumbnail} alt={course.title} />
      <h3>{course.title}</h3>
      <button>Enroll Now</button>
    </div>
  );
};

export default CourseCard;