import { Footer, NavBar } from "../components/PageComponents";
import QuestionForm from '../components/QuestionForm'
import '../css/global-for-pages.css'

function QuestionFormPage() {
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

export default QuestionFormPage;
