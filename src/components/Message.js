import React from 'react';
import '../css/message.css';

function Message(props) {
  return (
    <div className='message-container'>

      <p className='userId'><b>USER ID: </b>{props.userId}</p>
      
      <p className='userFullName'><b>NAME: </b>{props.userFullName}</p>
      
      <p className='userEmail'><b>EMAIL: </b>{props.userEmail}</p>
      
      <p className='userPhone'><b>PHONE: </b>{props.userPhone}</p>
      
      <p className='userDepartment'><b>DEPARTMENT: </b>{props.userDepartment}</p>
      
      <p className='userProgram'><b>PROGRAM: </b>{props.userProgram}</p>
      
      <p className='question'><b>MESSAGE: </b>{props.question}</p>

    </div>
  )
}

export default Message;