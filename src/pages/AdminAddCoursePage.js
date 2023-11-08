import { Footer, NavBar } from "../components/PageComponents";
import AdminAddCourses from "../components/AdminAddCourses";
import "../css/global-for-pages.css";

function CourseAddition() {
    return (
        <div className="AdminAddCoursePage">
            <NavBar />
            <div className="flex-container">
                <AdminAddCourses />
            </div>
            <Footer />
        </div>
    )
}

export default CourseAddition;