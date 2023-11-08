import { Footer, NavBar } from "../components/PageComponents";
import ContactUsForm from '../components/ContactUsForm'
import '../css/global-for-pages.css'

function ContactUsPage() {
  return (
    <div className="Auth">
      <NavBar />
      <div className="flex-container">
        < ContactUsForm />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
