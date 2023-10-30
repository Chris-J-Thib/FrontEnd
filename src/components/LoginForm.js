import React from "react";
import '../css/loginForm.css'

function LoginForm() {
  return (
      <div className="main-container-login-form">
        <form>
          <div>
          <label htmlFor="email">Email:</label>
            <input  type="text" id="email" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <br />
            <button type="submit">Sign in</button>
          </div>
          
          <div>
            <p>Don't you have an account yet?</p>
            <button type="button" onClick={() => { window.location.href = "/SignUp"; }}>
              Sign Up
            </button>
          </div>
        </form>

      </div>
  )
}

export default LoginForm;