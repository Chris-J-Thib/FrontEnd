import React, { useRef } from 'react';
import '../css/enroll.css'
import { useState, useEffect} from 'react';
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import { GetAllCourses } from './DataManagement';

function Enroll() {

   useEffect(()=>{
    GetAllCourses().then((x)=>{
        setCourseList(x);
        refCourseList.current = x;
      });
  },[]);

  const refCourseList = useRef([]);

  const [courseList, setCourseList] = useState([]);


  const handleSearch=(e)=>{
    e.preventDefault();

    console.log('Searching...');
    
    let courseName = String(e.target[0].value);
    let courseCode = String(e.target[1].value).toUpperCase();
    if(courseName == "") courseName = null;
    if(courseCode == "") courseCode = null;

    console.log(`Name ${courseName} Code ${courseCode}`);

    console.log(courseList);

    setCourseList(refCourseList.current.filter(course => 
      course.name.includes(courseName) || course.code.includes(courseCode)
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