import ReactDOM from 'react-dom/client';
import users from './databases/users.json';
import msgData from './databases/messages.json';
import App from './App';
import { SetUsers } from './components/DataManagement';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(localStorage.getItem("users") == null){
    SetUsers(users);
}

if(localStorage.getItem("msgs") == null){
    var dict = new Object();
    msgData.forEach(m=>{
        dict[m.messageId] = m;
    })
    localStorage.setItem("msgs",JSON.stringify(dict));
}




root.render(
    <App />
);

