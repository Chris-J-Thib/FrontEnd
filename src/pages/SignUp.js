import { Footer, NavBar } from "./PageComponents";
import SignUpForm from '../components/SignUpForm'
import '../css/global-for-pages.css'

function SignUp() {
  return (
    <div className="Auth">
        <NavBar />

        <div className="flex-container">
          <SignUpForm />
        </div>
        <Footer />
    </div>
  );
}

export default SignUp;
