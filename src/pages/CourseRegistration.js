import {Footer, NavBar} from "./PageComponents";
import Enroll from '../components/Enroll'

function CourseRegistration() {
    return (
        <div className="CourseRegistration">
            <NavBar/>
                <div>
                    <Enroll />
                </div>
            <Footer/>
        </div>
    )
}

export default CourseRegistration;