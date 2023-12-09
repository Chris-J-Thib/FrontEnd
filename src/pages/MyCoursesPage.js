import {Footer, NavBar} from "../components/PageComponents";
import Enroll from '../components/MyCourses'
import '../css/global-for-pages.css'


function MyCoursesPage() {
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

export default MyCoursesPage;