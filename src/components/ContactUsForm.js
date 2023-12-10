import React from "react";
import { useState } from "react";
import '../css/contactUsForm.css';
import { GetUserValue, SendMessage } from "./DataManagement";

let person_id = '';
let full_name = '';
let email = '';
let phone = '';
let program = '';
let program_type = '';  
let filled = false;

function ContactUsForm() {//if user is signed in populate fields
  const [message, setMessage] = useState({ person_id: person_id, full_name: full_name, email: email, phone: phone, program: program, program_type: program_type, message: "" });
  
  const handleNameChange = (event) => {
        setMessage({ ...message, full_name: event.target.value });
      };
      
      const handleEmailChange = (event) => {
        setMessage({ ...message, email: event.target.value });
      };
      
      const handlePhoneChange = (event) => {
        setMessage({ ...message, phone: event.target.value });
      };
      
      const handleDepartmentChange = (event) => {
        setMessage({ ...message, program: event.target.value });
      };
      
      const handleProgramChange = (event) => {
        setMessage({ ...message, program_type: event.target.value });
      };
      
      const handleMessageChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMessage({ ...message, [name]: value });
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        SendMessage(message);
      };
      
      if (sessionStorage.getItem("id") != null && !filled) {
          GetUserValue('*').then(userOnDB =>{
            setMessage({
              person_id: sessionStorage.getItem("id"),
              full_name: userOnDB["first_name"] + " " + userOnDB["last_name"],
              email: userOnDB["email"],
              phone: userOnDB["phone"],
              program: userOnDB["program"],
              program_type: userOnDB["program_type_name"]
            })
            filled = true;//prevents looping getting this info
        });
      }

      return (
        <div className="question-form-container">
    
        <div className="title-section">
          <h1>Contact admin</h1>
        </div>
    
        <form onSubmit={handleSubmit}>
          <div className='logged-in-user-info'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={message.full_name} onChange={handleNameChange} disabled={sessionStorage.getItem("id") != null} /><br />
    
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={message.email} onChange={handleEmailChange} disabled={sessionStorage.getItem("id") != null} /><br />
    
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" value={message.phone} onChange={handlePhoneChange} disabled={sessionStorage.getItem("id") != null} /><br />
    
            <select name="Department" id="dpt" value={message.program != null ? message.program : ""} onChange={handleDepartmentChange} disabled={sessionStorage.getItem("id") != null} >
              <option value="" disabled hidden>Department</option>
              <option value="SD">Software Development</option>
            </select><br />
    
            <select name="Program" id="prgm" value={message.program_type != null ? message.program_type : ""} onChange={handleProgramChange} disabled={sessionStorage.getItem("id") != null} >
              <option value="" disabled hidden>Program</option>
              <option value="1">Undergraduate</option>
              <option value="2">Post-Graduate</option>
              <option value="3">Diploma</option>
            </select><br />
          </div>
    
    
          <div className="question-section">
            <label htmlFor="question">Question:</label><br />
    
            <textarea id="question" onChange={handleMessageChange} name='message' value={message.message} /><br />
    
          </div>
    
          <div className="buttons-section">
            <button type="submit">Submit</button>
          </div>
    
        </form>
      </div>
    );
}

export default ContactUsForm;