import React, { useState, useEffect } from "react";
import '../css/signUpForm.css'
import '../css/global-for-pages.css'
import { GetDepartments, SignUp } from "./DataManagement";

function SignUpForm() {

  useEffect(() => {
    GetDepartments().then(x =>
      setDPL(x))
  }, []);

  const [DPL, setDPL] = useState([]);




  return (
    <div className="container-sign-up-form">
      <div className="title-section">
        <h1>Create Your Account</h1>
      </div>
      <form>
        <input type="text" id="first_name" placeholder="First Name" />

        <input type="text" id="last_name" placeholder="Last Name" />

        <input type="email" id="email" placeholder="Email" />

        <input type="tel" id="phone" placeholder="Phone" pattern="[0-9]{10}" />

        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id='birthday' />


        <select id="program_id">
          <option disabled hidden selected>Choose Department : Program</option>
          {DPL.map((p) => <option value={p.program_id}>{p.program + " : " + p.program_type_name}</option>)}
        </select>


        <input type="text" id="username" placeholder="Username" />

        <input type="password" id="password" placeholder="password" />

        <div className='sign-up-button-section'>
          <button type="button" onClick={SignUp}>Sign Up</button>
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

