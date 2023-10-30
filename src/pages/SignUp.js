import { Footer, NavBar } from "./PageComponents";
import "../css/style.css";


function SignUp() {
    return (
        <div className="Auth">
            <NavBar />
                <div>
                    <ul>
                        <li>
                            <input type="text" placeholder="First Name">
                            </input>
                        </li>
                        <li>
                            <input type="text" placeholder="Last Name">
                            </input>
                        </li>
                        <li>
                            <input type="date">
                            </input>
                        </li>
                        <li>
                            <select name="Department" id="dpt">
                                <option value="" disabled selected hidden>Department</option>
                                <option value="SD">
                                    Software Development
                                </option>
                            </select>
                        </li>
                        <select name="Program" id="prgm">
                            <option value="" disabled selected hidden>Program</option>
                            <option>
                                Certificate
                            </option>
                            <option>
                                Diploma
                            </option>
                            <option>
                                Post-Diploma
                            </option>
                        </select>
                        <li>
                        </li>
                        <li>
                            <input type="text" placeholder="Username">
                            </input>
                        </li>
                        <li>
                            <input type="password" placeholder="Password" required="true">
                            </input>
                        </li>
                        <li>
                            <input type="password" placeholder="Re-Password" required="true">
                            </input>
                        </li>
                    </ul>
                </div>
                <div>
                    <button id="butSign">SignUp</button>
                    <hr />
                    <label id="lblCheck" for="butLog">Already have an account?</label>
                    <button id="butLog"><a href="/Login">Login</a></button>
                </div>
            <Footer />
        </div>
    );
}

export default SignUp;
