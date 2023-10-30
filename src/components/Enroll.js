import React from 'react';
import '../css/enroll.css'
import { useState } from 'react';
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import courses from '../databases/courses.json'

function Enroll() {

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
          {/* {courses.map((course) => {
              return <Course
                name={course.name}
                code={course.code}
                description={course.description}
                startingDate={course.startDate}
                endingDate={course.endDate}
                image={require(`../${course.imageURL}`)} />
            })}; */}
            <CourseList courses={courseList}/>
        </div>
    </div>
  );
}

export default Enroll;