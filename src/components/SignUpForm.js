import React from "react";
import '../css/signUpForm.css'
import '../css/global-for-pages.css'
import { SignUp } from "./DataManagement";

function SignUpForm() {
  return (
    <div className="container-sign-up-form">
      <form>
        <input type="text" id="firstName" placeholder="First Name" />

        <input type="text" id="lastName" placeholder="Last Name" />

        <input type="email" id="email" placeholder="Email" />

        <input type="tel" id="phone" placeholder="Phone" />

        <label htmlFor="dob">Birthday:</label>
        <input type="date" id='dob' />

        <select name="Department" id="dpt">
          <option value="" disabled selected hidden>Department</option>
          <option value="SD">Software Development</option>
        </select>

        <select name="Program" id="prgm">
          <option value="" disabled selected hidden>Program</option>
          <option>Certificate</option>
          <option>Diploma</option>
          <option>Post-Diploma</option>
        </select>

        <input type="text" id="username" placeholder="Username" />

        <input type="password" id="password" placeholder="password" />

        <div className='sign-up-button-section'>
          <button type="reset" onClick={SignUp}>Sign Up</button>
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

