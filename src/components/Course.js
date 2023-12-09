import React from 'react';
import '../css/course.css';

function Course(props) {
  const sd = new Date(Date.parse(props.startingDate));
  const ed = new Date(Date.parse(props.endingDate));
  return (
    <div className='course-container'>

      <div className='course-info-container'>
        <p className='course-name'>{props.name}</p>
        <p className='course-code'>{props.code}</p>
        <p className='course-description'>{props.description}</p>
        <p className='course-date'>{
          sd.toLocaleDateString('en-CA', {month: 'short', day: 'numeric', year: 'numeric'})
        } - {
          ed.toLocaleDateString('en-CA', {month: 'short', day: 'numeric', year: 'numeric'})
        }</p>
        <div>{props.children}</div>
      </div>

      <img 
        className='course-image'
        src={require(`../img/${props.image}`)}
        alt={props.name}/>

    </div>
  )
}

export default Course;