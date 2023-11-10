import ReactDOM from 'react-dom/client';
import App from './App';
import { SetMsgs, SetUsers } from './components/DataManagement';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(localStorage.getItem("users") == null){
    SetUsers(null);
}

if(localStorage.getItem("msgs") == null){
    SetMsgs(null);
}




root.render(
    <App />
);

