import React, { useEffect, useState } from "react";
import Message from './Message';
import messages from '../databases/messages.json'
import '../css/MessagesList.css';

function MessagesList(props) {

useEffect(()=>{
  fetch('api/admin/get-message').then(r=>r.json().then(m=>{
    setMessages(m);
  }))
},[]);


const [messages, setMessages] = useState([]);

  return (
        messages.length > 0 ? (
      <div className="message-list-container">
      {messages.map(message =>(
        <div>
          <Message
            userId={message.person_id}
            userFullName={message.full_name}
            userEmail={message.email}
            userPhone={message.phone}
            userDepartment={message.program}
            userProgram={message.program_type}
            question={message.message} />
        </div>
      ))}
    </div>
        ):(<div></div>)
  );
}

export default MessagesList;
