import users from "../databases/users.json";
import courses from "../databases/courses.json";

export async function SignIn(){
    let em = document.getElementById('email').value;
    let pw = document.getElementById('password').value;
    users.forEach((o)=>{
        if(o.email == em && o.password == pw){
            sessionStorage.setItem("id",o.id);
            window.location.href = "/";
        }
    })
}

export async function GetUserType(){
    let ret = users.filter((o)=>o.id == sessionStorage.getItem("id"))[0].program;
    //console.log(ret);
    return ret;
}

export async function GetEnrolled(CODE){
    let ret = courses.filter((o)=>o.code == CODE)[0].enrolled;
    //console.log(ret);
    return ret;
}