import React from 'react';
import '../css/enroll.css'
import { useState, useEffect} from 'react';
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import { GetAllCourses } from './DataManagement';

function Enroll() {

   useEffect(()=>{
    GetAllCourses().then((x)=>{
        setCourseList(x);
      });
  },[]);

  const [courseList, setCourseList] = useState([]);


  const handleSearch=(e)=>{
    e.preventDefault()

    console.log('Searching...')
    const courseName = e.target[0].value
    const courseCode = e.target[1].value

    setCourseList(courseList.filter(course => 
      course.name.includes(courseName) && course.code.includes(courseCode)
    ));
  } 


  return (
    <div className="main-container-enroll">
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

export default Enroll;