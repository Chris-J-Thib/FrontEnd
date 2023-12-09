import React, { useState, useEffect } from "react";
import Course from './Course';
import { AddCourse, DropCourse, GetUserValue, ViewStudentsOnCourse, AdminDeleteCourse, GetUserCourses } from "./DataManagement";
import '../css/courseList.css'

function CourseList (props) {

  useEffect(()=>{
    GetUserCourses().then((x)=>{
        setCourseList(x);
      });
  });

  const [userCourses, setCourseList] = useState([]);

  return (
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
              
              userCourses.filter(c=>c.code == course.code).length != 0 ? (
                <>
                <button onClick={DropCourse}>Drop</button>
                </>
              ) : (
                <>
                <button onClick={AddCourse}>Enroll</button>
                </>
              )

              
            ) : (
              <>
                <button onClick={ViewStudentsOnCourse}>View</button>
                <button onClick={AdminDeleteCourse}>Delete</button>
              </>
            )}
            </div>
          </Course>
        </div>
      ))}
    </div>
  );
  }

export default CourseList;