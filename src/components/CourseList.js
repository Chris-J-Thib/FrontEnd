import React from "react";
import Course from './Course';
import { AddCourse, DropCourse, GetUserValue } from "./DataManagement";
import '../css/courseList.css'

function CourseList (props) {
  return (
    <div>
      {props.courses.map(course => (
        <div>
        <Course
          name={course.name}
          code={course.code}
          description={course.description}
          startingDate={course.startDate}
          endingDate={course.endDate}
          image={require(`../${course.imageURL}`)}>
            <div>
            {props.student ? (

              GetUserValue("courses").filter(c=>c.code == course.code).length != 0 ? (
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
                <button>View</button>
                <button>Delete</button>
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