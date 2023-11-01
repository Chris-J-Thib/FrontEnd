import { Footer, NavBar } from "../components/PageComponents";
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

//      { user example
//        "firstName": "",
//        "lastName": "",
//        "email": "",
//        "phone": "",
//        "dob": "",
//        "department": "",
//        "program": "",
//        "username": "",
//        "password": "",
//        "id": users.length,
//        "courses": []
//     },


export default SignUp;
