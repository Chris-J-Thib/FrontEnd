import { Footer, NavBar } from "../components/PageComponents";
import AdminAddCourses from "../components/AdminAddCourses";
import "../css/global-for-pages.css";
import "../css/contactUsForm.css";

function CourseAddition() {
    return (
        <div>
            <NavBar />
            <div className="flex-container">
                <AdminAddCourses />
            </div>
            <Footer />
        </div>
    )
}

export default CourseAddition;