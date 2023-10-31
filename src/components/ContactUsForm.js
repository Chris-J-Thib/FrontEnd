import React from "react";
import '../css/contactUs.css';
import '../css/signUpForm.css';

function ContactUsForm() {
  return (
    <div className="question-form-container">

      <div className="title-section">
        <h2>Contact admin</h2>
      </div>

      <form>
        <div className='logged-in-user-info'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" />
          <br />
          <select name="Department" id="dpt">
            <option value="" disabled selected hidden>Department</option>
            <option value="SD">Software Development</option>
          </select>
          <br />
          <select name="Program" id="prgm">
            <option value="" disabled selected hidden>Program</option>
            <option>Certificate</option>
            <option>Diploma</option>
            <option>Post-Diploma</option>
          </select>
          <br />
        </div>


        <div className="question-section">
          <label htmlFor="question">Question:</label>
          <br />
          <textarea id="question" />
          <br />
        </div>

        <div className="buttons-section">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>

      </form>
    </div>
  );
}

export default ContactUsForm;