import React from "react";
import '../css/signUpForm.css'

function SignUpForm() {
  return (
  <div className="container-sign-up-form">
    <form>
        <input type="text" id="firstName" placeholder="First Name"/>
        <br />
        <input type="text" id="lastName" placeholder="Last Name"/>
        <br />
        <input type="email" id="email" placeholder="Email"/>
        <br />
        <input type="tel" id="phone" placeholder="Phone"/>
        <br />
        <label htmlFor="dob">Birthday:</label>
        <input type="date" id='dob'/>
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
        <input  type="text" id="username" placeholder="Username"/>
        <br />
        <input type="password" id="password" placeholder="password"/>
        <br />
        <div className='sign-up-button-section'>
          <button type="submit">Sign Up</button>
        </div>
    </form>
    <div className="login-section">
      <p>Already have an account?</p>
      <button type="button" onClick={() => { window.location.href = "/Login"; }}>
        Sign In
      </button>
    </div>
  </div>
  );
}

export default SignUpForm;

