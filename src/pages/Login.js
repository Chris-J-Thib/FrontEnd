import { NavBar, Footer } from "./PageComponents";
import { SignIn } from "../components/Auth";
// import "../css/style.css";
import LoginForm from "../components/LoginForm";
// import '../css/login.css'
import '../css/global-for-pages.css'


function Login() {
    return (
        <div>
            <NavBar />

            {/* <div className="main-container-login">
                <LoginForm />
            </div> */}
            
            <div className="flex-container">
                <LoginForm />
            </div>
            
            <Footer />
        </div>
    )
}

export default Login;
