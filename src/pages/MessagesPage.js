import { Footer, NavBar } from "../components/PageComponents";
import MessageList from '../components/MessagesList'
import '../css/global-for-pages.css'

function MessagesPage() {
  return (
    <div>
      <NavBar />
      
      <div className="flex-container">
        <MessageList />
      </div>
      
      <Footer />
    </div>
  );
}

export default MessagesPage;
