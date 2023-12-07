import React from "react";
import { useState } from "react";
import '../css/contactUsForm.css';
import { GetUserValue } from "./DataManagement";

let userId = '';
let userFullName = '';
let userEmail = '';
let userPhone = '';
let userDepartment = '';
let userProgram = '';  
let filled = false;

function ContactUsForm() {//if user is signed in populate fields
  const [message, setMessage] = useState({ userId: userId, userFullName: userFullName, userEmail: userEmail, userPhone: userPhone, userDepartment: userDepartment, userProgram: userProgram, question: "" });
  
  const handleNameChange = (event) => {
        setMessage({ ...message, userFullName: event.target.value });
      };
      
      const handleEmailChange = (event) => {
        setMessage({ ...message, userEmail: event.target.value });
      };
      
      const handlePhoneChange = (event) => {
        setMessage({ ...message, userPhone: event.target.value });
      };
      
      const handleDepartmentChange = (event) => {
        setMessage({ ...message, userDepartment: event.target.value });
      };
      
      const handleProgramChange = (event) => {
        setMessage({ ...message, userProgram: event.target.value });
      };
      
      const handleQuestionChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMessage({ ...message, [name]: value });
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your message has been sent!');
        console.log(message);
      };
      
      if (sessionStorage.getItem("id") != null && !filled) {
          GetUserValue('*').then(userOnDB =>{
            setMessage({
              userId: sessionStorage.getItem("id"),
              userFullName: userOnDB["first_name"] + " " + userOnDB["last_name"],
              userEmail: userOnDB["email"],
              userPhone: userOnDB["phone"],
              userDepartment: userOnDB["program"],
              userProgram: userOnDB["program_type_name"]
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
            <input type="text" id="name" value={message.userFullName} onChange={handleNameChange} disabled={sessionStorage.getItem("id") != null} /><br />
    
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={message.userEmail} onChange={handleEmailChange} disabled={sessionStorage.getItem("id") != null} /><br />
    
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" value={message.userPhone} onChange={handlePhoneChange} disabled={sessionStorage.getItem("id") != null} /><br />
    
            <select name="Department" id="dpt" value={message.userDepartment != null ? message.userDepartment : ""} onChange={handleDepartmentChange} disabled={sessionStorage.getItem("id") != null} >
              <option value="" disabled hidden>Department</option>
              <option value="SD">Software Development</option>
            </select><br />
    
            <select name="Program" id="prgm" value={message.userProgram != null ? message.userProgram : ""} onChange={handleProgramChange} disabled={sessionStorage.getItem("id") != null} >
              <option value="" disabled hidden>Program</option>
              <option>Certificate</option>
              <option>Diploma</option>
              <option>Post-Diploma</option>
            </select><br />
          </div>
    
    
          <div className="question-section">
            <label htmlFor="question">Question:</label><br />
    
            <textarea id="question" onChange={handleQuestionChange} name='question' value={message.question} /><br />
    
          </div>
    
          <div className="buttons-section">
            <button type="submit">Submit</button>
          </div>
    
        </form>
      </div>
    );
}

export default ContactUsForm;