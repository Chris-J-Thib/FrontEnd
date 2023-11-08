import ReactDOM from 'react-dom/client';
import users from './databases/users.json';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(localStorage.length == 0){
    users.forEach(u => {
        localStorage.setItem(u.id,JSON.stringify(u))
    })
}


root.render(
    <App />
);

