import ReactDOM from 'react-dom/client';
import users from './databases/users.json';
import App from './App';
import { SetUsers } from './components/DataManagement';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(localStorage.getItem("users")==null){
    SetUsers(users);
}




root.render(
    <App />
);

