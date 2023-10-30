import { Footer, NavBar } from "./PageComponents";
import AdminAddCourses from "../components/AdminAddCourses";
import '../css/adminCheckCoursesPage.css'

function CourseAddition() {
    return (
        <div className="AdminAddCoursePage">
            <NavBar />
            <div>
                <AdminAddCourses />
            </div>
            <Footer />
        </div>

    )
}

export default CourseAddition;