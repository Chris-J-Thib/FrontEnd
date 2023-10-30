import users from "../databases/users.json";

async function SignIn(){
    let em = document.getElementById('email').value;
    let pw = document.getElementById('password').value;
    users.forEach((o)=>{
        if(o.email == em && o.password == pw){
            console.log(o.id);
            sessionStorage.setItem("id",o.id);
        }
    })
}

export default SignIn;
