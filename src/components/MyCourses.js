import React, { useState, useEffect, useRef } from "react";
import '../css/myCourses.css'
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import { GetUserCourses } from "./DataManagement";

function MyCourses() {

  useEffect(()=>{
    GetUserCourses().then((x)=>{
        setCourseList(x);
        refCourseList.current = x;
      });
  },[]);
  
  
  const refCourseList = useRef([]);

  const [courseList, setCourseList] = useState([]);
  
  const handleSearch=(e)=>{
    e.preventDefault()
    
    console.log('Searching...')
    
    let courseName = String(e.target[0].value);
    let courseCode = String(e.target[1].value).toUpperCase();
    if(courseName == "" && courseCode != "") courseName = null;
    if(courseCode == "" && courseName != "") courseCode = null;

    const newList = courseList.filter(course => 
      course.name.includes(courseName) || course.code.includes(courseCode));
    setCourseList(newList);
    }

  return (
    <div className="main-container-my-courses">
        <div className="filter-section">
          <CourseFilter 
            handleSearch={handleSearch} />
        </div>
        <div className="courses-section">
          {<CourseList courses={courseList} student={true}/>}
        </div>
    </div>
  );
}

export default MyCourses;