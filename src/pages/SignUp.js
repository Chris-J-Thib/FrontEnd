import { Footer, NavBar } from "./PageComponents";
import "../css/style.css";
import SignUpForm from '../components/SignUpForm'
import '../css/signUp.css'


function SignUp() {
  return (
    <div className="Auth">
        <NavBar />

        <div className="main-container-signup">
          <SignUpForm />
        </div>
        <Footer />
    </div>
  );
}

export default SignUp;
