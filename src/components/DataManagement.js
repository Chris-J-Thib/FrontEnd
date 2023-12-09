import coursesData from "../databases/courses.json";
import usersData from "../databases/users.json";
import msgsData from "../databases/messages.json";

 function home(){
    window.location.href = "/";
}

export async function GetDepartments(){
    const resp = await fetch('api/admin/get-departments');
    return await resp.json();
}

export async function SignIn(){
    sessionStorage.clear();
    let un = document.getElementById('user').value;
    let pw = document.getElementById('password').value;
    let st = document.getElementById('status');

    const resp = await fetch('api/login/sign-in',
        {   method: "POST",
            headers:    {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
            body: JSON.stringify({username: un,password: pw})
        });

    const user = await resp.json();
    console.log(user);

    if(user.error == null){
        sessionStorage.id = user[0].person_id;
        home();
    } else {
        st.innerText = user.error+'\n';
    }
}

export async function SignUp(){
    if(sessionStorage.getItem("id") != null) return;
    let filled = true;

    //ADD check to ensure diffrent UN and Email here...

    let newUser = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        birthday: document.getElementById("birthday").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        is_admin: 0,//Change via DB if a user is an admin.
        department: document.getElementById("department").value,
        program: document.getElementById("program").value,
        courses: []
    }
    
    //check to make sure all fields are filled
    Object.keys(newUser).forEach(key=>{
        if(key.toString() != "courses" && key.toString() != "is_admin"){
            if(newUser[key]==""){
                document.getElementById(key.toString()).style.border = "2px solid red";
                filled=false;
            } else {
                document.getElementById(key.toString()).style.border = "";
            }
        }
    })

    if(filled){
        console.log(newUser);
        const resp = await fetch(
                    'api/student/sign-up',{
                        method: "POST",
                        headers:{
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
        const data = await resp.json();
        console.log("data= "+data);
        //home();
    } 
}

export function Logout() {
    sessionStorage.clear();
    home();
}

//takes an array of users in json format and adds them.
export function SetUsers(users){
    if(users == null)users = usersData;
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

export function SetMsgs(msgs){
    if(msgs == null)msgs = msgsData;
    var dict = new Object();
    msgs.forEach(m=>{
        dict[m.messageId] = m;
    })
    localStorage.setItem("msgs",JSON.stringify(dict));
}

///This function is taxing on the DB pref use other
export async function GetUserValue(value, id = sessionStorage.getItem("id")){
    if( id == null){
        console.log(`Returning Null`);
        return null;
    } else {
        //console.log(`ID = ${id}`)
        const resp = await fetch(`api/login/user_info?person_id=${id}`)
        const data = await resp.json();
        //console.log(data);
        if(value == '*') return data[0];
        return data[0][value];
        
    }
    
}

export function AddCourse(e){
    let id = sessionStorage.getItem("id");
    if( id == null) return null;

    let user = GetUserValue('*');
    let targ = e["target"];
    while(targ["className"] != "course-info-container") targ = targ.parentNode;

    let code = targ.childNodes[1].innerHTML;
    //HERE is where the change needs to be made for course list on user
    let check = user.courses.filter(c=>c.code == code);
    
    if( check.length == 0) {
        user.courses.push(GetCourse(code));
        console.log("added course");
        SetUsers([user]);
        alert("Course added")
    } else {
        alert("Already enrolled in course");
        console.log("course exists")
    };     
}

export function DropCourse(e){
    let id = sessionStorage.getItem("id");
    if( id == null) return null;
    
    let user = GetUserValue('*');
    let targ = e["target"];
    while(targ["className"] != "course-info-container") targ = targ.parentNode;
    
    let code = targ.childNodes[1].innerHTML;
    //HERE is where the change needs to be made for course list on user
    let check = user.courses.filter(c=>c.code == code);

    let index = user.courses.findIndex(i=>i==check[0]);
    if (index >= 0){
        user.courses.splice(index,1);
        SetUsers([user]);
        alert("Course dropped");
        window.location.reload();      
        console.log("dropped course");
    }
}

export async function GetUserCourses(){
    const resp = await fetch('api/student/my-courses?person_id='+sessionStorage.id);
    return await resp.json();
}

export async function GetCourse(CODE){
    return await fetch();
}

export function GetCourseData(CODE, value){
    return GetCourse(CODE)[value];
}

export async function GetAllCourses(){
    const resp = await fetch('api/admin/get-all-courses');
    return await resp.json()
}

//For admin view students on a course and delete te course
export function ViewStudentsOnCourse(e){
    let users = JSON.parse(localStorage.getItem("users"));
    let studentsEnrolled = [];
    for (let key = 0; key < Object.keys(users).length; key++){
        let u = users[key];
        let id = u.id;
        let user = GetUserValue('*');
        let targ = e["target"];
        while(targ["className"] != "course-info-container") targ = targ.parentNode;
    
        let code = targ.childNodes[1].innerHTML;
        let check = user.courses.filter(c=>c.code == code);
    
        // console.log(user);
        // console.log(check);
        // console.log('-----------------');
        if( check.length > 0) {
            studentsEnrolled.push(user);
        }     
    }
    let namesStudentsEnrolled = studentsEnrolled.map((student) => student.firstName + " " + student.lastName + '\n');
    alert("Students enrolled:\n" + namesStudentsEnrolled);
    console.log(studentsEnrolled);
}

//in shows the course to be deleted in the console and as an alert. it does not delete the course because react cannot modify the json file
export function AdminDeleteCourse(e) {
    let targ = e["target"];
    while(targ["className"] != "course-info-container") targ = targ.parentNode;
    let code = targ.childNodes[1].innerHTML;

    alert('Course: ' + code + ', deleted');
    let course = coursesData.filter((c)=>c.code == code)[0];

    console.log('Course to be deleted:');
    console.log(course);
}