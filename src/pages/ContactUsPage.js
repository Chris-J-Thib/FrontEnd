import { Footer, NavBar } from "../components/PageComponents";
import QuestionForm from '../components/ContactUsForm'
import '../css/global-for-pages.css'

function ContactUsPage() {
  return (
    <div className="Auth">
      <NavBar />
      <div className="flex-container">
        < QuestionForm />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
