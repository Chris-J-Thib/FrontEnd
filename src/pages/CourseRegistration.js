import {Footer, NavBar} from "./PageComponents";
import Enroll from '../components/Enroll'
import '../css/courseRegistration.css'

function CourseRegistration() {
    return (
        <div className="CourseRegistration">
            <NavBar/>
                <div className="main-container">
                    <Enroll />
                </div>
            <Footer/>
        </div>
    )
}

export default CourseRegistration;