import React, { useState, useEffect } from "react";
import '../css/myCourses.css'
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import { GetUserCourses } from "./DataManagement";

function MyCourses() {

  useEffect(()=>{
    GetUserCourses().then((x)=>{
        setCourseList(x);
      });
  },[]);
  
  


  const [courseList, setCourseList] = useState([]);
  
  const handleSearch=(e)=>{
    e.preventDefault()
    
    console.log('Searching...')
    const courseName = e.target[0].value
    const courseCode = e.target[1].value
    const newList = courseList.filter(course => 
      course.name.includes(courseName) && course.code.includes(courseCode));
    setCourseList(newList);
    }

  return (
    <div className="main-container-my-courses">
        <div className="filter-section">
          <CourseFilter 
            handleSearch={handleSearch} />
        </div>
        <div className="courses-section">
          {<CourseList courses={courseList} student={true} enrolled={true}/>}
        </div>
    </div>
  );
}

export default MyCourses;