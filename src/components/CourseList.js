import React, { useState, useEffect } from "react";
import Course from './Course';
import { DropCourse, ViewStudentsOnCourse, AdminDeleteCourse, GetUserCourses, EnrollCourse } from "./DataManagement";
import '../css/courseList.css'

function CourseList (props) {

  useEffect(()=>{
    GetUserCourses().then((x)=>{
        if(x == null)setCourseList([]);
        setCourseList(x);
      });
  },[]);

  const [courseList, setCourseList] = useState([]);

  return (
    props.courses.length > 0 ? (
    <div>
      {
      props.courses.map(course => (
        <div>
        <Course
          name={course.name}
          code={course.code}
          description={course.description}
          startingDate={course.start_date}
          endingDate={course.end_date}
          image={course.img}>
            <div>
            {props.student ? (
              
              courseList.length > 0 && courseList.filter(c=>c.code == course.code).length != 0 ? (
                <>
                <button onClick={(e)=>DropCourse(e)}>Drop</button>
                </>
              ) : (
                <>
                <button onClick={(e)=>EnrollCourse(e)}>Enroll</button>
                </>
              )

              
            ) : (
              <>
                <button onClick={(e)=>ViewStudentsOnCourse(e)}>View</button>
                <button onClick={(e)=>AdminDeleteCourse(e)}>Delete</button>
              </>
            )}
            </div>
          </Course>
        </div>
      ))}
    </div>
    ) : (<div></div>)
  );
  }

export default CourseList;