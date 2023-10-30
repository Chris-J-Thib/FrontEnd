import React from "react";
import Course from './Course';
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
              <button>Enroll</button>
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