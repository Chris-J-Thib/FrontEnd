import React from 'react';

function Message(props) {
  return (
    <div className='message-container'>
      <p className='userId'>{props.userId}</p>
      <p className='userFullName'>{props.userFullName}</p>
      <p className='userEmail'>{props.userEmail}</p>
      <p className='userPhone'>{props.userPhone}</p>
      <p className='userDepartment'>{props.userDepartment}</p>
      <p className='userProgram'>{props.userProgram}</p>
    </div>
  )
}

export default Message;