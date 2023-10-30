import React from 'react';
import '../css/course.css'

function Course(props) {
  return (
    <div className='course-container'>

      <div className='course-info-container'>
        <p className='course-name'>{props.name}</p>
        <p className='course-code'>{props.code}</p>
        <p className='course-description'>{props.description}</p>
        <p className='course-date'>{props.startingDate} - {props.endingDate}</p>
        <button className='enroll-button'>Enroll</button>
      </div>

      <img 
        className='course-image'
        src={props.image}
        alt={props.name}/>

    </div>
  )
}

export default Course;