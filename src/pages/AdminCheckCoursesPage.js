import {Footer, NavBar} from "./PageComponents";
import AdminCheckCourses from '../components/AdminCheckCourses'
import '../css/global-for-pages.css'


function CourseRegistration() {
    return (
        <div>
            <NavBar/>
                <div className="flex-container">
                    <AdminCheckCourses />
                </div>
            <Footer/>
        </div>
    )
}

export default CourseRegistration;