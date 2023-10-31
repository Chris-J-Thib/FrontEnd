import { NavBar, Footer } from "../components/PageComponents";
import "../css/main.css";
import '../css/global-for-pages.css';

function Main() {
    return (
        <div >
            <NavBar />

            <div className="flex-container">
                <div className="background">
                    <div className="mainContainer">
                        <h1>Welcome!</h1>
                        <p>You can search for and download course outlines by using the course code or course name. If your search returns no results, please check that you are using the correct spelling. Please note that these outlines are available starting with the Fall 2023 term. If you are looking for course outlines prior to Fall 2023, or you have any questions, please contact your School. </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Main;