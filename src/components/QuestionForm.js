import React from "react";
import '../css/questionForm.css'

function QuestionForm() {
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
          <input  type="text" id="email" />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" />
          <br />
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" />
          <br />
          <label htmlFor="program">Program:</label>
          <input type="text" id="program" />
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

export default QuestionForm;