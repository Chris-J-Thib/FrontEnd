import { NavBar, Footer } from "../components/PageComponents";
import { SignIn } from "../components/Auth";
import LoginForm from "../components/LoginForm";
import '../css/global-for-pages.css'

function Login() {
    return (
        <div>
            <NavBar />
            
            <div className="flex-container">
                <LoginForm />
            </div>
            
            <Footer />
        </div>
    )
}

export default Login;
