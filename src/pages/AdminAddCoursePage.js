import { Footer, NavBar } from "./PageComponents";
import AdminAddCourses from "../components/AdminAddCourses";

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