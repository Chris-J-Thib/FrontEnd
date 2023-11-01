import React from "react";
import '../css/loginForm.css'
import {SignIn} from "./DataManagement.js"

function LoginForm() {
  return (
      <div className="main-container-login-form">
        <form>
          <div>
            <label htmlFor="email">Username or Email:</label>
            <input  type="text" id="user" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <br />
            <div className='sign-in-button-section'>
              <button type="reset" onClick={SignIn}>Sign In</button>
            </div>
          </div>
        </form>

        <div className="signup-section">
          <p>Don't you have an account yet?</p>
          <button type="button" onClick={() => { window.location.href = "/SignUp"; }}>
            Sign Up
          </button>
        </div>
      </div>
  )
}

export default LoginForm;