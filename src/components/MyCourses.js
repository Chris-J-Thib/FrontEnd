import React from "react";
import '../css/myCourses.css'
import { useState } from 'react';
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import users from '../databases/users.json'

function MyCourses() {

  const userCourses = users.filter(user => user.id == sessionStorage.getItem("id"))[0].courses;

  const [courseList, setCourseList] = useState(userCourses);

  const handleSearch=(e)=>{
    e.preventDefault()

    console.log('Searching...')
    const courseName = e.target[0].value
    const courseCode = e.target[1].value

    setCourseList(userCourses.filter(course => 
      course.name.includes(courseName) && course.code.includes(courseCode)
    ));
  } 

  return (
    <div className="main-container-my-courses">
        <div className="filter-section">
          <CourseFilter 
            handleSearch={handleSearch} />
        </div>
        <div className="courses-section">
          <CourseList courses={courseList} student={true}/>
        </div>
    </div>
  );
}

export default MyCourses;