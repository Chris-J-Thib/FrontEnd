import { NavBar, Footer } from "./PageComponents";
import "../css/style.css";
import LoginForm from "../components/LoginForm";
import '../css/login.css'


function Login() {
    return (
        <div>
            <NavBar />
            {/* <div>
                <ul>
                    <li><input id="Username" placeholder="Username" type="text"></input></li>
                    <li><input id="Password" placeholder="Password" type="password"></input></li>
                </ul>
            </div>
            <div>
                <button id="butLog">Login</button><hr />
                <label id="lblCheck" for="butSign">Don't have an account yet?</label>
                <button id="butSign"><a href="/SignUp">SignUp</a></button>
            </div> */}
            <div className="main-container-login">
                <LoginForm />
            </div>
            

            <Footer />
        </div>
    )
}

export default Login;

