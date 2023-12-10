import React, { useState, useEffect, useRef } from 'react';
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import '../css/adminCheckCourse.css'


function AdminCheckCourses() {

  useEffect(()=>{
    fetch('api/admin/get-all-courses').then(r=>r.json().then(c=>
      setCourseList(c)))
    courseRef.current = courseList;
  },[])

  const courseRef = useRef([]);

  const [courseList, setCourseList] = useState([]);


  const handleSearch=(e)=>{
    e.preventDefault()

    console.log('Searching...')
    let courseName = String(e.target[0].value);
    let courseCode = String(e.target[1].value).toUpperCase();
    if(courseName == "") courseName = null;
    if(courseCode == "") courseCode = null;

    setCourseList(courseRef.current.filter(course => 
      course.name.includes(courseName) || course.code.includes(courseCode)
    ));
  } 


  return (
    courseList.length > 0 ? (
    <div className="main-container-check-course">
        <div className="filter-section">
          <CourseFilter 
            handleSearch={handleSearch} />
        </div>
        <div className="courses-section">
          <CourseList courses={courseList} student={false}/>
        </div>
    </div>
    ):(<div></div>)
  );
}

export default AdminCheckCourses;