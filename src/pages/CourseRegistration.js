import {Footer, NavBar} from "../components/PageComponents";
import Enroll from '../components/Enroll'
import '../css/global-for-pages.css'


function CourseRegistration() {
    return (
        <div>
            <NavBar/>
                <div className="flex-container">
                    <Enroll />
                </div>
            <Footer/>
        </div>
    )
}

export default CourseRegistration;