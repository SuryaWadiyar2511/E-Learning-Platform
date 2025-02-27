import React from "react";
import { useParams} from "react-router-dom";
import VideoPlayer from "../pages/VideoPlayer";
import './CourseDetail.css';
const CourseDetail = () => {
  const { id } = useParams();
  return (
    <div className="course-detail">
      <h2>Course Details for Course ID: {id}</h2>
      <p>Course description goes here...</p>
      <VideoPlayer videoUrl="https://www.youtube.com/embed/7CqJlxBYj-M" />
      <button className="btn" onClick={() => alert("Course Enrolled Successfully")}>Enroll Now</button>
    </div>
  );
};

export default CourseDetail;
