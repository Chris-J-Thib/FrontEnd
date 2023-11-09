import courses from "../databases/courses.json";
import usersData from "../databases/users.json";

export function SignIn(){
    sessionStorage.clear();
    let un = document.getElementById('user').value;
    let pw = document.getElementById('password').value;
    let st = document.getElementById('status');

    let users = JSON.parse(localStorage.getItem("users"));
    for (let key = 0; key < Object.keys(users).length; key++){
        let u = users[key];
        if(u.username == un || u.email == un){
            if(u.password == pw){
                sessionStorage.setItem("id", u.id);
                window.location.href = '/';
                return;
            } else {
                st.innerText = 'Inncorrect Passowrd\n';
                return;
            }
        }
    }

    st.innerText = 'User not found\n';
}

export function SignUp(){
    if(sessionStorage.getItem("id") != null) return;

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
        "id": localStorage["users"].length,
        "courses": []
    }
    //localStorage.setItem(newUser.id,JSON.stringify(newUser));
    sessionStorage.setItem("id",newUser.id);
    console.log(newUser);
    window.location.href = "/";
}

export function Logout() {
    sessionStorage.clear();
    window.location.href = "/";
}

export function GetUser(id){
    let ret = JSON.parse(localStorage.getItem("users"))[id];
    //console.log(JSON.stringify(ret));
    return ret;
}

//takes an array of users in json format and adds them.
export function SetUsers(users){
    var dict;
    dict = localStorage.getItem("users");
    if(dict != null){
        dict = JSON.parse(dict);
        localStorage.removeItem("users");
    } else dict = new Object();
    users.forEach(u=>{
        dict[u.id] = u;
    })
    console.log(dict);
    localStorage.setItem("users",JSON.stringify(dict));
}

export function GetUserValue(value){
    let id = sessionStorage.getItem("id");
    if( id == null){
        return null;
    } else {
        let ret = JSON.parse(localStorage.getItem("users"))[id][value];
        return ret;
    }
    
}

export function AddCourse(e){
    let id = sessionStorage.getItem("id");
    if( id == null) return null;

    let user = GetUser(id);
    let targ = e["target"];
    while(targ["className"] != "course-info-container") targ = targ.parentNode;

    let code = targ.childNodes[1].innerHTML;
    let check = user.courses.filter(c=>c.code == code);

    if( check.length == 0) {
        user.courses.push(GetCourse(code));
        console.log("added course");
        SetUsers([user]);
    } else console.log("course exists");     
}

export function DropCourse(e){
    let id = sessionStorage.getItem("id");
    if( id == null) return null;

    let user = GetUser(id);
    let targ = e["target"];
    while(targ["className"] != "course-info-container") targ = targ.parentNode;

    let code = targ.childNodes[1].innerHTML;
    let check = user.courses.filter(c=>c.code == code);

    let index = user.courses.findIndex(i=>i==check[0]);
    if (index >= 0){
        user.courses.splice(index,1);
        SetUsers([user]);
        window.location.reload();      
        console.log("dropped course");
    }
}

export function GetCourse(CODE){
    let ret = courses.filter((o)=>o.code == CODE)[0];
    return ret;
}

export function GetCourseData(CODE, value){
    return GetCourse(CODE)[value];
}