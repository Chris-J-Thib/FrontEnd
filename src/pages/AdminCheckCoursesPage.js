import {Footer, NavBar} from "./PageComponents";
import AdminCheckCourses from '../components/AdminCheckCourses'
import '../css/adminCheckCoursesPage.css'

function CourseRegistration() {
    return (
        <div className="AdminCheckCoursePage">
            <NavBar/>
                <div className="main-container">
                    <AdminCheckCourses />
                </div>
            <Footer/>
        </div>
    )
}

export default CourseRegistration;