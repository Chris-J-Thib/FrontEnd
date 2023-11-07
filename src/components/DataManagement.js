import courses from "../databases/courses.json";

export function SignIn(){
    sessionStorage.clear();
    let user = document.getElementById('user').value;
    let pw = document.getElementById('password').value;
    let st = document.getElementById('status');

    for(let i = 0; i < localStorage.length; i++){
        let o = JSON.parse(localStorage.getItem(i));
        if(o.email == user || o.username == user){
            if(o.password == pw){
                sessionStorage.setItem("id",o.id);
                window.location.href = '/';
                break;
            } else {
                st.innerText = "Incorrect Password.\n"
                break;
            }
        } else st.innerText = "User does not exist.\n";
    }

}

export function SignUp(){
    if(GetUserValue("id") != null) return;

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
        "id": localStorage.length,
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

export function GetUserValue(value){
    let id = sessionStorage.getItem("id");
    if( id == null){
        return null;
    } else {
        let ret = JSON.parse(localStorage.getItem(id))[value];
        return ret;
    }
    
}

export function AddCourse(e){
    let id = sessionStorage.getItem("id");
    if( id == null) return null;
    let user = JSON.parse(localStorage.getItem(id));
    let targ = e["target"];
    while(targ["className"] != "course-info-container"){
        targ = targ.parentNode;
    }
    let code = targ.childNodes[1].innerHTML;

    let check = user.courses.filter(c=>c.code == code);
    console.log(check);
    if( check.length == 0) {
        user.courses.push(GetCourse(code));
        console.log("added course");
        localStorage.removeItem(id);
        localStorage.setItem(id,JSON.stringify(user));
    } else {
        console.log("course exists");  
    }
    
}
export function GetCourse(CODE){
    let ret = courses.filter((o)=>o.code == CODE)[0];
    return ret;
}
