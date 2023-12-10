import coursesData from "../databases/courses.json";
import usersData from "../databases/users.json";
import msgsData from "../databases/messages.json";

 function home(){
    window.location.href = "/";
}



export async function Logout() {
    sessionStorage.clear();
    home();
}



export async function IsAdmin(){
    const resp = await fetch('api/admin/admin-check?person_id='+sessionStorage.id);
    const data =  await resp.json();
    return data[0].is_admin;
}



export async function GetDepartments(){
    const resp = await fetch('api/admin/get-departments');
    return await resp.json();
}



export async function SignIn(){
    sessionStorage.clear();
    const un = document.getElementById('user').value;
    const pw = document.getElementById('password').value;
    const st = document.getElementById('status');
    const resp = await fetch('api/login/sign-in',
        {   method: "POST",
            headers:    {'Accept': 'application/json','Content-Type': 'application/json'},
            body: JSON.stringify({username: un,password: pw})
        });
    const user = await resp.json();
    if(user.error == null){
        sessionStorage.id = user[0].person_id;
        home();
    } else st.innerText = user.error+'\n';
}



export async function SignUp(){
    if(sessionStorage.getItem("id") != null) return;
    const filled = true;
    const newUser = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        birthday: document.getElementById("birthday").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        program_id: document.getElementById("program_id").value,
        is_admin: 0,//Change via DB if a user is an admin.
        courses: []
    }
    //check to make sure all fields are filled
    Object.keys(newUser).forEach(key=>{
        if(key.toString() != "courses" && key.toString() != "is_admin"){
            if(newUser[key]==""){
                document.getElementById(key.toString()).style.border = "2px solid red";
                filled=false;
            } else document.getElementById(key.toString()).style.border = "";
        }
    })
    if(!filled) return;
    await fetch('api/student/sign-up',{
        method: "POST",
        headers:{'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify(newUser)}) 
    home(); 
}



///This function is taxing on the DB. pref use other
export async function GetUserValue(value, id = sessionStorage.id){
    if( id == null) return null;
    const resp = await fetch(`api/login/user_info?person_id=${id}`)
    const data = await resp.json();
    if(value == '*') return data[0];
    return data[0][value];
}//148,171,214



export async function GetUserCourses(){
    const resp = await fetch('api/student/my-courses?person_id='+sessionStorage.id);
    return await resp.json();
}



export async function GetAllCourses(){
    const resp = await fetch('api/admin/get-all-courses');
    return await resp.json()
}