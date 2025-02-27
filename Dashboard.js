import React from "react";

const Dashboard = () => {
  const completedCourses = [
    { id: 1, title: "JavaScript Course", progress: 70 },
    { id: 2, title: "React Course", progress: 30 },
  ];
  return (
    <div className="dashboard">
      <h2>My Dashboard(My Learning Progress)</h2>
      {completedCourses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <progress value={course.progress} max="100"></progress>
        </div>
      ))}
      <button>View All Courses</button>
    </div>
  );
};

export default Dashboard;