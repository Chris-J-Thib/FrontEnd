import React from 'react';
import { useState } from 'react';
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import courses from '../databases/courses.json'

function AdminCheckCourses() {

  const [courseList, setCourseList] = useState(courses);


  const handleSearch=(e)=>{
    e.preventDefault()

    console.log('Searching...')
    const courseName = e.target[0].value
    const courseCode = e.target[1].value

    setCourseList(courses.filter(course => 
      course.name.includes(courseName) && course.code.includes(courseCode)
    ));
  } 


  return (
    <div className="main-container">
        <div className="filter-section">
          <CourseFilter 
            handleSearch={handleSearch} />
        </div>
        <div className="courses-section">
          <CourseList courses={courseList}/>
        </div>
    </div>
  );
}

export default AdminCheckCourses;