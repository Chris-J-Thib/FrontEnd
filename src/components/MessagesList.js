import React from "react";
import Message from './Message';
import messages from '../databases/messages.json'
import '../css/MessagesList.css';

function MessagesList(props) {
  return (
    <div className="message-list-container">
      {messages.map(message =>(
        <div>
          <Message
            userId={message.userId}
            userFullName={message.userFullName}
            userEmail={message.userEmail}
            userPhone={message.userPhone}
            userDepartment={message.userDepartment}
            userProgram={message.userProgram}
            question={message.question} />
        </div>
      ))}
    </div>
  );
}

export default MessagesList;
