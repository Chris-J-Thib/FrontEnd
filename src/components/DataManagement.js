import users from "../databases/users.json";
import courses from "../databases/courses.json";


export function SignIn(){
    let id = null;
    let user = document.getElementById('user').value;
    let pw = document.getElementById('password').value;
    users.forEach((o)=>{
        if((o.username == user || o.email == user) && o.password == pw){
            sessionStorage.setItem("id",o.id);
            window.location.href = "/";
        }
    })
    for(let i = 0; i < localStorage.length; i++){
        let o = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if((o.username == user || o.email == user) && o.password == pw){
            sessionStorage.setItem("id",o.id);
            window.location.href = "/";
        }
    }
}

export function SignUp(){

    let user = document.getElementById('email').value;
    let pw = document.getElementById('password').value;

    users.forEach((o)=>{
        if((o.username == user || o.email == user)){
            return
        }
    })
    for(let i = 0; i < localStorage.length; i++){
        let o = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if((o.username == user || o.email == user)){
            return
        }
    }

    let newUser = {
        "firstName": document.getElementById("firstName").value,
        "lastName": document.getElementById("lastName").value,
        "email": document.getElementById("email").value,
        "phone": document.getElementById("phone").value,
        "dob": document.getElementById("dob").value,
        "department": document.getElementById("dpt").value,
        "program": document.getElementById("prgm").value,
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
        "id": users.length,
        "courses": []
    }
    localStorage.setItem(newUser.id,JSON.stringify(newUser));
    sessionStorage.setItem("id",newUser.id);
    console.log(newUser);
    window.location.href = "/";
}

export function Logout() {
    sessionStorage.clear();
    window.location.href = "/";
}

export function GetUserType(){
    if(sessionStorage.getItem("id")==null)return null;
    let ret = users.filter((o)=>o.id == sessionStorage.getItem("id"))[0].program;
    if(ret == null){
        ret = localStorage.getItem(sessionStorage.getItem("id")).program;
    }
    //console.log(ret);
    return ret;
}

export function GetCourses(){
    if(sessionStorage.getItem("id")==null)return null;
    let ret = users.filter((o)=>o.id == sessionStorage.getItem("id"))[0].courses;
    if(ret == null){
        ret = localStorage.getItem(sessionStorage.getItem("id")).courses;
    }
    //console.log(ret);
    return ret;
}

export function GetEnrolled(CODE){
    let ret = courses.filter((o)=>o.code == CODE)[0].enrolled;
    //console.log(ret);
    return ret;
}